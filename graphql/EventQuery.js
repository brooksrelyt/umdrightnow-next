import gql from 'graphql-tag'

const EVENTS_QUERY = gql`
query ($pageOffset: Int){
  adv_events (
    filter: {destination: 2157}, 
    page: {limit: 50, offset: $pageOffset}, 
    sort: {field: "start_date", direction: ASC}, 
    date_one: { field: "start_date", date: "now", operator: ">="}
  ) {
    data {
      id
      title
      description
      ongoing
      destination {
        tid
        name
        slug
      }
      links {
        title
        uri
      }
      cost_registration_link {
        title
        uri
      }
      schools {
        tid
        name
        slug
      }
      tags {
        tid
        name
        slug
      }
      images {
        id
      }
      start_date {
        raw
        unformatted
        formatted_long
        formatted_short
        time
        unix
      }
      end_date {
        raw
        unformatted
        formatted_long
        formatted_short
        time
        unix
      }
    }
  }
}
`

export default EVENTS_QUERY
