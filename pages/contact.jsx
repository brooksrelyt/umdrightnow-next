import React, { useState, useReducer } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import Helmet from 'react-helmet'
import Script from 'react-inline-script'

// Custom layout
import Layout from '../components/layout'
import '../sass/styles.scss'

var he = require('he');

function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="container-fluid border-bottom no-pad-all">
        <div className="container">
          <div className="row spaces">
            <div className="col-md-3 sidebar">
              <h1>Contact</h1>
            </div>
            <div className="col-md-8 offset-md-1 mt-3 no-pad-all">
              <p>Page Content</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
