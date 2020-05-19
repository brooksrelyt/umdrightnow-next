import React, { useState } from 'react'
import Link from 'next/link'
import Markdown from 'react-markdown'
import ExpandCollapse from 'react-expand-collapse'
import moment from 'moment'
import { If, Then, Else } from 'react-if'

moment.suppressDeprecationWarnings = true

const he = require('he');

function eventItems(props) {
  console.log(props)
  return (
    <div className="col-md-6 d-flex align-items-stretch">
      <div className="mb-4 w-100">
        <div className="w-100 h-100 card event">
          <div className="card-body">
            {props.schools &&
              <div>
              {props.schools.map((school, i) => (
                <div className="top-info" key={i}>
                  <p className="card-tag">{school.name}</p>

                  {props.ongoing === true && 
                    <div className="frequency mt-3">
                      <span className="frequency-tag">Ongoing</span>
                    </div>
                  }
                </div>
              ))}
              </div>
            }
            
            <ul className="sub-info">
              <li className="mb-3">
                <span className="fal fa-icon fa-calendar red"></span>
                <If condition={props.start_date.formatted_short === props.end_date.formatted_short}>
                  <Then>
                    {moment(props.start_date.formatted_short).format("ddd, MMMM DD, YYYY")}
                  </Then>
                  <Else>
                    {moment(props.start_date.formatted_short).format("ddd, MMMM DD, YYYY")} - {moment(props.end_date.formatted_short).format("ddd, MMMM DD, YYYY")}
                  </Else>
                </If>
              </li>
              <li className="mb-3">
                <span className="fal fa-icon fa-clock red"></span>
                <span>
                  {props.start_date.time == null
                    ? ''
                    : <span>{props.start_date.time}</span>
                  }
                  {props.end_date.time == null
                    ? ''
                    : <span>
                        - <span>{props.end_date.time}</span>
                    </span>
                  }
                </span>
              </li>
            </ul>

            <h4 className="card-title">{he.decode(`${props.title}`)}</h4>
            <Markdown
              className="card-text"
              source={he.decode(`${props.description.substring(0,200)}${props.description.length > 200 ? '...' : ''}`)}
              escapeHtml={false}
            />
            <div className="d-inline left">
              {props.cost_registration_link &&
                <a className="btn register mr-3" href={`${props.cost_registration_link.uri}`} target="_blank">
                  <p className="mb-0">RSVP Now</p>
                </a>
              }
            </div>
            {props.links &&
              <div className="d-inline">
                {props.links.map((link, i) => (
                  <a className="slide-link mr-3 mt-2" href={`${link.uri}`} target="_blank" key={i}>
                    <p className="mb-0">Learn More <span aria-hidden="true">&rarr;</span></p>
                  </a>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default eventItems
