import tweepy


# Constants

# ---------------------------------------------------------------------------

access_token = '1562649399700103169-W8Vn55arGIs2pCm1NLBX9eoO635BTk'
access_token_secret = 'H5THPnyo5OGw986lMUh9GPZIGEdyCmPubNLk5l4vKQvrl'

consumer_key = 'pcsRsU7GDZOgwZ7HAp4xu9HyF'
consumer_secret = 'a6f0WkogRcPlHh94vZ25EfMuFVE7rShDwYfhpIp1rnhaaXJULm'



user = 'AICTE_INDIA'
limit = 10



# --------------------------------------------------------------------------------

# AUTH setup

# --------------------------------------------------------------------------------

auth = tweepy.OAuth1UserHandler(
    consumer_key, consumer_secret, access_token, access_token_secret
)

api = tweepy.API(auth)

# --------------------------------------------------------------------------------


#************************************Functions**************************************

def tweet_keywords(keyword, count):
    tweets = api.search_tweets(q=keyword, count=count, tweet_mode='extended')
    return tweets

def tweet(tweetid, tweet_default_reply):
    api.update_status(tweet_default_reply, auto_populate_reply_metadata=True, in_reply_to_status_id = tweetid)

def getTweet(tweetid):
    tweet = api.get_status(tweetid, tweet_mode = "extended")._json
    return tweet