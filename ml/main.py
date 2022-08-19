from flask import Flask, request, json
import openai
from TweetScrape.scrape import tweet_keywords

openai.api_key = "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"
app = Flask(__name__)


"""
ROUTE:

POST :: /keywords

INPUT:

Body should contain the key 'text', Where the sentence is passed to extract keywords

OUTPUT:

Returns keywords as a string
"""


@app.route('/keywords', methods=['POST'])
def keywords():
    print(request.form.items())
    # print(request.form[0]['text'])
    text = request.form.get('text')
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Extract keywords from this text, And give the answer as a list: " +
        text,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


@app.route('/date', methods=['POST'])
def date():
    text = request.form.get('text')
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
    text = request.form.get('text')
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
    print(text['text'])
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Summarize this text: " +
        text['text'],
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
    print(text['text'])
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="State the grievance in this text in one word: " +
        text['text'],
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )
    return response


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
    return json_tweet


@app.route('/gettweetstext', methods=['POST'])
def gettweetstext():
    data = json.loads(request.data)
    text_tweet = getTweetsText(data['keyword'], data['count'])
    return text_tweet


app.run(host='0.0.0.0', port=8080, debug=True)
