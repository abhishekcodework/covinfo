# -*- coding: utf-8 -*-
"""summarizer.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1jV1du9aA66K-UmZXlBuAtyUOqg6Dqm_P
"""



import requests
from bs4 import BeautifulSoup
import pandas as pd
import nltk
from newspaper import Article
nltk.download('punkt')

from newsapi import NewsApiClient

# Init
newsapi = NewsApiClient(api_key='9c518b08758c40d6b86e0f4ae00eb373')

# /v2/everything
all_articles = newsapi.get_everything(q='covid',
                                      sources='the-hindu,the-times-of-india',
                                      domains='',
                                      from_param='2020-04-01',
                                      to='2020-04-13',
                                      language='en',
                                      sort_by='relevancy',
                                      page=1)

#all_articles['articles']

from newsapi import NewsApiClient

# Init
newsapi = NewsApiClient(api_key='9c518b08758c40d6b86e0f4ae00eb373')

# /v2/everything
all_articles1 = newsapi.get_everything(q='covid india',
                                      sources='',
                                      domains='techcrunch.com,Moneycontrol.com',
                                      from_param='2020-04-01',
                                      to='2020-04-13',
                                      language='en',
                                      sort_by='relevancy',
                                      page=1)

#all_articles1['articles'][0]

#all_articles['articles'][0]

#all_articles1['articles'][0]['source']['name']

df = pd.DataFrame() 
df1 = pd.DataFrame()

g=[]
h=[]
output = ''
blacklist = ['[document]',
 'a',
 'article',
 'body',
 'div',
 'footer',
 'form',
 #'h1',
 'h3',
 'head',
 'header',
 'html',
 'input',
 'label',
 'li',
 'link',
 'meta',
 'script',
 'span',
 'style',
 'textarea',
 'time',
 'title',
 'ul',
 'style'
	# there may be more elements you don't want, such as "style", etc.
]
for i in range(len(all_articles['articles'])):
  g.append(float('nan'))

df['title']=g
df['source']=g
df['text']=g
df['url']=g
df['imgurl']=g
df['summary']=g

for i in range(len(all_articles1['articles'])):
  h.append(float('nan'))

df1['title']=h
df1['source']=h
df1['text']=h
df1['url']=h
df1['imgurl']=h
df1['summary']=h

for i in range(len(all_articles['articles'])):
  df['title'][i]=all_articles['articles'][i]['title']
  df['source'][i]=all_articles['articles'][i]['source']['name']   
  df['url'][i]=all_articles['articles'][i]['url']    
  df['imgurl'][i]=all_articles['articles'][i]['urlToImage']
  url = all_articles['articles'][i]['url'] 
  res = requests.get(url)
  html_page = res.content
  soup = BeautifulSoup(html_page, 'html.parser')
  text = soup.find_all(text=True)
  output = ''
  for t in text:
	  if t.parent.name not in blacklist:
		  output += '{} '.format(t)
  #translated = translator.translate(output,src='it',dest='en')
  article = Article(url)
  article.download()
  article.parse()
  article.text=output.strip()
  article.nlp()
  df['text'][i]=article.text   
  df['summary'][i]=article.summary

for i in range(len(all_articles1['articles'])):
  df1['title'][i]=all_articles1['articles'][i]['title']
  df1['source'][i]=all_articles1['articles'][i]['source']['name']   
  df1['url'][i]=all_articles1['articles'][i]['url']    
  df1['imgurl'][i]=all_articles1['articles'][i]['urlToImage']
  url = all_articles1['articles'][i]['url'] 
  res = requests.get(url)
  html_page = res.content
  soup = BeautifulSoup(html_page, 'html.parser')
  text = soup.find_all(text=True)
  output = ''
  for t in text:
	  if t.parent.name not in blacklist:
		  output += '{} '.format(t)
  #translated = translator.translate(output,src='it',dest='en')
  article = Article(url)
  article.download()
  article.parse()
  article.text=output.strip()
  article.nlp()
  df1['text'][i]=article.text   
  df1['summary'][i]=article.summary

#df1.head()
#print(df['summary'][1])

#import pickle
#df.to_pickle('/content/drive/My Drive/df_news_gen.pkl')
#df1.to_pickle('/content/drive/My Drive/df_news_tech.pkl')

data_gen = df.to_dict() 
data_tech = df1.to_dict()


#data_dict
def f1():
  return df

def f2():
  return df1
#data_dict['summary'][0]