import React from 'react'
import Head from 'next/head'

// Custom layout
import Layout from '../components/layout'
import '../sass/styles.scss'
import EventList from '../components/events/EventList'
import ArticlesList from '../components/articles/ArticlesList'
import EventHits from '../components/events/EventHits'


// IMAGES
import Background from '../public/img/background.jpg'
import Smile from '../img/smile.jpg'
import JackieLewis from '../img/jackielewis.png'
import KeepMaryland from '../img/keepmaryland.jpg'
import CampusPantry from '../img/campuspantry.jpg'
import StudentCrisis from '../img/studentcrisis.jpg'
import Bridge from '../img/bridge.png'

var he = require('he');

function Index() {
  return (
    <Layout>
      <img className="mb-5 img-fluid sr-only" src={Background} alt=" " /> {/* TEMP fix for Jackie image */}
      <Head>
        <title>Keep Together: We're all in this together.</title>
        <meta name="description" content="To every one of our alumni, donors, parents and friends, thank you for standing together, shells united. Members of the University of Maryland community support one another through adversity, and we will emerge from the coronavirus pandemic strong and proud. This is what it means to be a Terrapin." />
      </Head>
      <div className="hero-wrapper special3card">
        <div id="hero" className="header-banner" style={{backgroundImage: 'url(' + Background + ')'}} role="img" aria-label="Keep Connected Banner: Statue of Testudo from the side" />
        <div className="container h-textarea">
          <div className="h-textarea-inner">
            <div className="row">
              <div className="col-lg-4">
                <div className="textarea-intro">
                  <h1 className="bold">We’re all in this together.</h1>
                  <hr className="hr-lrg" aria-hidden="true" />
                  <p>To every one of our alumni, donors, parents and friends, thank you for standing together, shells united. Members of the University of Maryland community support one another through adversity, and we will emerge from the coronavirus pandemic strong and proud. This is what it means to be a Terrapin.</p>
                  <a className="btn yellow-outline square" href="#video">watch #ShellsUnited</a>
                </div>
              </div>
              {/* <div className="col-lg-6 offset-lg-2 hide-for-mdsmall">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" width="560" height="400" src="https://www.youtube.com/embed/VUePGFGTno0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid red-bg" id="virtual">
        <div className="row med-spaces">
          <h2 className="white bold center no-pad-all no-marg-all w-100">Attend A Virtual Event</h2>
        </div>
      </div>

      <div className="container-fluid no-pad-all">
        <div className="spaces lightgray-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hero-small shadow">
                  <div className="work-item">
                    <a href="https://www.rhsmith.umd.edu/events/future-proof-your-career-how-succeed-vuca-economy-julie-neil">
                      <div className="hero-wrapper half-size overlay-bottom hero-wrapper-grid clearfix">
                        <div id="hero" className="header-banner dark" style={{backgroundImage: 'url(' + Bridge + ')'}}></div>
                        <div className="h-textarea">
                          <div className="col-lg-12 columns h-textarea-inner pl-5 pr-5">
                            <div className="textarea-intro special">
                              <p className="bold white uppercase text-shadow">Virtual Event</p>
                              <hr className="sm mb-4" />
                              <h2 className="white bold text-shadow">Future-proof Your Career: How to Succeed in a VUCA Economy with Julie Neil</h2>
                              <h3 className="white text-shadow">May 26 / 5:30 p.m. - 7:00 p.m.</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row spaces no-pad-b">
                  <div className="col-md-3">&nbsp;</div>
                  <div className="col-md-5">
                    <h4 className="bold">Upcoming Events</h4>
                  </div>
                  <div className="col-md-4">
                    <a className="right body-color small" href="/events">All Events <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
                {/* <EventList /> */}
                <EventList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid red-bg" id="informed">
        <div className="row med-spaces">
          <h2 className="white bold center no-pad-all no-marg-all w-100">Stay Informed</h2>
        </div>
      </div>

      <div className="container med-spaces">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch mb-4">
            <div className="border pt-5 pb-2 pr-4 pl-4">
              <h4 className="body-color no-pad-all no-marg-all w-100"><strong>Latest Updates</strong><br/> from Maryland Today</h4>
              <div className="med-spaces no-pad-b">
                <ArticlesList />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mb-4">
            <div className="border pt-5 pb-2 pr-4 pl-4 w-100">
              <h4 className="body-color no-pad-all no-marg-all w-100"><strong>Resources</strong></h4>
              <div className="med-spaces no-pad-b">
                <p>Content</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
