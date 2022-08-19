import tweepy


access_token = '709931203059589121-xDSr4nGo3eOlP7dn8OfjLIungotSZWT'
access_token_secret = 'xIVpW1wigtZZ2tDM7wq25WAVWDVcYFHW6sWUvyu1U4ELO'
consumer_key = 'j9Rz43GkGBybndHnl93K9ODct'
consumer_secret = 'f28kHZT6BuyU1ICa1ju4Qkyil4XPR2vOBveWG8vuZInr6YceSN'


user = 'AICTE_INDIA'
limit = 10


auth = tweepy.OAuth1UserHandler(
    consumer_key, consumer_secret, access_token, access_token_secret
)

api = tweepy.API(auth)


def tweet_keywords(keyword, count):
    tweets = api.search_tweets(q=keyword, count=count, tweet_mode='extended')
    return tweets
