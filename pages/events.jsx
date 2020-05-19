import React, { useState, useReducer } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'

// Custom layout
import Layout from '../components/layout'
import '../sass/styles.scss'
import EventHits from '../components/events/EventHits'

function Attend(props) {
  return (
    <Layout>
      <Head>
        <title>Keep Together: Attend</title>
      </Head>
      <div className="container-fluid border-bottom no-pad-all">
        <div className="container">
          <div className="row spaces">
            <div className="col-md-3 sidebar">
              <h1>Events Example</h1>
              <div className="med-spaces">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr className="sm mb-5" aria-hidden="true" />
                <a className="underline body-color" href="https://alumni.umd.edu/stay-connected/virtual-programming"><strong>Virtual Programming </strong><br />from the Alumni Association</a>
              </div>
            </div>
            <div className="col-md-8 offset-md-1 mt-3 no-pad-all">
              <div className="col mb-5">
                <h3>Virtual Events</h3>
              </div>

              <EventHits />

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Attend
