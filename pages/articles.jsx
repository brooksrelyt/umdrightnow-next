import React from 'react'
import Head from 'next/head'

// Custom layout
import Layout from '../components/layout'
import '../sass/styles.scss'

import Articles from '../components/articles/Articles'

var he = require('he');

function Connect() {
  return (
    <Layout>
      <Head>
        <title>Keep Together: Connect</title>
      </Head>
      <div className="container-fluid border-bottom no-pad-all">
        <div className="container">
          <div className="row spaces">
            <div className="col-md-3 sidebar">
              <h1>Articles Example</h1>
              <div className="med-spaces">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr className="sm mb-5" aria-hidden="true" />
                <a className="body-color underline" href="#">Sidebar Link</a>

              </div>
            </div>
            <div className="col-md-8 offset-md-1 mt-3 no-pad-all">
              <div className="mb-5">
                <div className="col-md-12 mb-5">
                  <h3>GraphQL Example Below: See components/articles/Articles</h3>
                </div>
                <Articles />
                <div className="center">
                  <a className="btn solid mr-2 group mb-3" href="https://today.umd.edu/">Read More at MD Today</a>
                  <a className="btn ml-2 group mb-3" href="https://today.umd.edu/">Subscribe To MD Today</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Connect
