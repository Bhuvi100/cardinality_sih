from cgitb import text
from tracemalloc import start
from flask import Flask, request, json
import openai
from TweetScrape.scrape import tweet_keywords, tweet, getTweet
import requests

openai.api_key = "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"
app = Flask(__name__)


translate_url = 'https://4rc14cfxqc.execute-api.us-east-1.amazonaws.com/default/translate'
translate_code_url = 'https://z4574ve5s8.execute-api.us-east-1.amazonaws.com/default/getLangCode'
translate_to_url = 'https://iev27015w1.execute-api.us-east-1.amazonaws.com/default/translateLang'

"""
ROUTE:

POST :: /keywords
https://4rc14cfxqc.execute-api.us-east-1.amazonaws.com/default/translate
INPUT:

Body should contain the key 'text', Where the sentence is passed to extract keywords

OUTPUT:

Returns keywords as a string
"""


@app.route('/keywords', methods=['POST'])
def keywords():
    text = json.loads(request.data)
    
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Extract keywords from this text, And give the answer as a list: " +
        text['text'],
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


@app.route('/date', methods=['POST'])
def date():
    text = json.loads(request.data)
    text = translate(text)
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Extract date from this text. Say only the date: " +
        text,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


@app.route('/urgency', methods=['POST'])
def urgency():
    text = json.loads(request.data)
    text = translate(text)
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Does this text needs an urgent reply?, say yes or no: " +
        text,
        temperature=0.3,
        max_tokens=64,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


@app.route('/summary', methods=['POST'])
def summary():
    text = json.loads(request.data)
    text = translate(text['text'])
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Summarize this text: " +
        text,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


@app.route('/complaint', methods=['POST'])
def complaint():
    text = json.loads(request.data)
    text = translate(text)
    print(text)
    print(type(text))
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="State the grievance in this text in one word: " +
        text,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


def isGrievance(text):
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Is this text a grievance, say yes or no: " + text,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


def translate(data):
    english_text = requests.post(translate_url, json=data)

    return english_text.text

def summarizeText(data):
    print("going to summarize")
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Summarize this text: " +
        data,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response

def getLangCode(data):
    english_text = requests.post(translate_code_url, json={'text' : data})
  
    return english_text.text

def translateTo(text, lang):
   
    translate_text = requests.post(translate_to_url, json={'text' : text, 'lang' : lang})
   
    return translate_text.text

def getTweetsJson(keyword, count):

    tweet_text = []
    data = tweet_keywords(keyword, count)
    for tweet in data:
        tweet_text.append(tweet._json)
    return tweet_text


def getTweetsText(keyword, count):

    tweet_text = []
    data = tweet_keywords(keyword, count)
    for tweet in data:
        tweet_text.append(tweet.full_text)
    return tweet_text


@app.route('/gettweets', methods=['POST'])
def gettweets():
    data = json.loads(request.data)

    json_tweet = getTweetsJson(data['keyword'], data['count'])
    
    return json.dumps(json_tweet)


@app.route('/gettweetstext', methods=['POST'])
def gettweetstext():
    data = json.loads(request.data)
    text_tweet = getTweetsText(data['keyword'], data['count'])
 
    return str(text_tweet)

@app.route('/tweetcomplaint', methods=['POST'])
def gettweetscomplaint():
    complaint_tweets = []
    tweet_dict = {

    }
    data = json.loads(request.data)
    text_tweet = getTweetsJson(data['keyword'], data['count'])
   
    id = 0
    for tweet in text_tweet:
        tweet_dict['id'] = id
       
        tweet_dict['tweet'] = tweet
        # tweet_dict['isGrievance'] = isGrievance(tweet)['choices'][0]['text']
        complaint_tweets.append(tweet_dict.copy())
        id = id + 1

    return json.dumps(text_tweet)


# Main tweet endpoint

@app.route('/tweet', methods=['POST'])
def tweetRp():
    complaint_tweets = []
    tweet_dict = {

    }
    data = json.loads(request.data)
    text_tweet = getTweetsJson(data['keyword'], data['count'])
   
    id = 0
    for tweet in text_tweet:
        print("*********************************")
        # print(tweet['extended_entities'])
        tweet_dict['id'] = id
        tweet_dict['posted_at'] = tweet['created_at']
        tweet_dict['tweet_id'] = tweet['id']
        tweet_dict['tweet'] = tweet['full_text']
        if 'extended_entities' in tweet:
            tweet_dict['url'] = tweet['extended_entities']['media'][0]['expanded_url']
        else:
            tweet_dict['url'] = ""
        tweet_dict['isGrievance'] = isGrievance(tweet['full_text'])['choices'][0]['text']
        complaint_tweets.append(tweet_dict.copy())
        id = id + 1

    return json.dumps(complaint_tweets)


@app.route('/tweetaccepted', methods=['POST'])
def tweetaccepted():
    data = json.loads(request.data)
    text = data['text']
    tweetid = data['tweetid']
    tweets = getTweet(tweetid)
    tweet_lang = getLangCode(tweets['full_text'])
    if "hi" in tweet_lang:
        print("**************************")
    print(type(tweet_lang))
    if(len(text) == 0):
        text = "Thank you, We will contact you soon!"

    tweet(tweetid, translateTo(text, tweet_lang))
    
    return 'OK'

@app.route('/isspam', methods=['POST'])
def isSpam():
    text = json.loads(request.data)
    text = translate(text)
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="What type of text is this?, Suggestion or Enquiry or Grievance or Complaint or Appreciation or Required Support or others ?, Answer it in a single word: " +
        text,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response



# @app.route('/isMailGrievance', methods=['POST'])
# def gettweetstext():
   
 
#     complaint_mails = []
#     tweet_dict = {

#     }
#     data = json.loads(request.data)
#     text_tweet = getTweetsText(data['keyword'], data['count'])
#     id = 0
#     for tweet in text_tweet:
#         tweet_dict['id'] = id
#         tweet_dict['tweet'] = tweet
#         tweet_dict['isGrievance'] = isGrievance(tweet)['choices'][0]['text']
#         complaint_mails.append(tweet_dict.copy())
#         id = id + 1

#     return str(complaint_mails)


app.run(host='0.0.0.0', port=8082)
