import React, { useState, useEffect } from "react"
import { GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

// Data Query
import ARTICLE_QUERY from '../../graphql/ArticleQuery'

var he = require('he')

function ArticleList() {
  const { data, loading, error } = useQuery(ARTICLE_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  console.log(data.articles)

  return (
  	<div className="row no-pad-all">
  		{data.articles.data.slice(0, 2).map((article, i) => (
        <div>
    			<div className="card image-left w-100 h-100" key={i}>
            <div className="row no-gutters">
              <a href={`https://today.umd.edu/articles/${article.slug}-${article.id}`}>
               <div className="col-auto col-img no-pad">
                  {article.hero_image.map((hero, index) => (
                    <img src={hero.url_1200_630} className="img-fluid" alt={hero.alt} key={index} />
                  ))}
                </div>
              </a>
              <div className="col">
                <div className="card-block">
                  {article.topics.slice(0, 1).map((topic, index) => (
                    <p className="card-tag" key={index}>
                      <a href={`https://today.umd.edu/tags/${topic.slug}`} className="home-link track-click">
                        {topic.name}
                      </a>
                    </p>
                  ))}
                  <h4 className="card-title" data-mh="match"><a className="body-color" href={`https://today.umd.edu/articles/${article.slug}-${article.id}`}>{he.decode(`${article.title}`)}</a></h4>
                  <Markdown
                    source={article.subtitle}
                    escapeHtml={false}
                    className="card-text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <a href="/connect" className="slide-link body-color">View All Updates <span aria-hidden="true">&rarr;</span></a>
    </div>
  )
}

export default ArticleList
