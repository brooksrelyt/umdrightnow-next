import React, { useState, useReducer } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import _ from 'lodash'

// import Events from '../components/events/Events'
import FilterNav from '../filternav'

// Algolia Hits
import Hits from "../hit"

// Algolia Search
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, CurrentRefinements, connectInfiniteHits, connectStateResults, Configure } from 'react-instantsearch-dom'

// Algolia Options
const client = algoliasearch('2OBMTZH1ZO','31292c7201f1e738f8a15a32b8a41baa')

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div className="spaces center col">
        <div className="col">
          <p>No results have been found for {searchState.query}.</p>
        </div>
      </div>
    )
);

// Algolia Custom Infinite Hits
const InfiniteHits = ({hits, refineNext, hasMore}) => {
  return(
    <div className="row w-100">
      <Results>
        {hits.map((hit, index) => (
          <Hits {...hit} key={index} />
        ))}
      </Results>
      {hasMore &&
        <button className="ais-InfiniteHits-loadMore mt-3" onClick={refineNext}>Show more</button>
      }
    </div>
  )
};

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits)

var he = require('he');

function EventHits(props) {
  return (
    <InstantSearch
      searchClient={client}
      indexName='prod_umd_calendar'
    >

      <FilterNav />

      <div className="container-fluid">
        {/* <div className="row">
          <CurrentRefinements />
        </div> */}
        <div className="row w-100 med-spaces">
          <CustomInfiniteHits />
        </div>
      </div>
    </InstantSearch>
  )
}

export default EventHits
