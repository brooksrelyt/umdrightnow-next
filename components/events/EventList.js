import React, { useState, useEffect } from "react"
import { GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import Moment from 'react-moment'

// Data Query
import EVENTS_QUERY from '../../graphql/EventQuery'

var he = require('he')

function Event() {
  const { data, loading, error } = useQuery(EVENTS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  // Current Date Variables
  const today = Math.floor(+ new Date().getTime() / 1000)

  // console.log(today)

  return (
  	<div className="row med-spaces">
  		{data.adv_events.data.filter(event => event.start_date.unix >= today).slice(0, 4).map((event, i) => (
  			<div className="event col-12" key={i}>
          <div className="row event-item">
            <div className="col-md-2 offset-md-1">
              <div className="event-date mb-3">
                <p className="month"><Moment format="MMM">{event.start_date.unformatted}</Moment></p>
                <p className="date"><Moment format="DD">{event.start_date.unformatted}</Moment></p>
              </div>
            </div>
            <div className="col-md-9 event-title">
                <span className="time">{event.start_date.time} - {event.end_date.time}</span>
                <div>
                  {event.cost_registration_link &&
                    <a href={`${event.cost_registration_link.uri}`} target="_blank">
                      <p className="bold mb-0">{he.decode(`${event.title}`)}</p>
                    </a>
                  }
                  {event.links &&
                    <div>
                      {event.links.map((link, i) => (
                        <a href={`${link.uri}`} target="_blank" key={i}>
                          <p className="bold mb-0">{he.decode(`${event.title}`)}</p>
                        </a>
                      ))}
                    </div>
                  }
                 </div>
                {event.schools.map((school, i) => (
                  <span key={i}>{school.name}</span>
                ))}
            </div>
          </div>
	      </div>
      ))}
    </div>
  )
}

export default Event
