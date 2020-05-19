import React, { useState, useEffect } from "react"
import { GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap'

// Data Query
import ARTICLES_QUERY from '../../graphql/ArticleQuery'

var he = require('he')

function Event() {
  const { data, loading, error } = useQuery(ARTICLES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
  	<div className="row row-eq-height neg-marg">
  		{data.articles.data.slice(0, 9).map((article, i) => (
        <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch mb-4" key={i}>
          <Card className="w-100">
            <div className="card-img-wrapper">
              {article.hero_image.map((hero, index) => (
                <div key={index}>
                  <a href={`https://today.umd.edu/articles/${article.slug}-${article.id}`}>
                    <div>
                      <CardImg top width="100%" src={hero.url} alt={hero.alt} />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <CardBody>
              {article.topics.slice(0, 1).map((topic, index) => (
                <p className="card-tag" key={index}>
                  <a href={`https://today.umd.edu/tags/${topic.slug}`} className="home-link track-click">
                    {topic.name}
                  </a>
                </p>
              ))}

              <CardTitle>
                <a className="body-color" href={`https://today.umd.edu/articles/${article.slug}-${article.id}`}>
                  {he.decode(`${article.title}`)}
                </a>
              </CardTitle>
              <hr aria-hidden="true" />
              <CardText className="no-marg-b">{he.decode(`${article.subtitle}`)}</CardText>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Event
