import gql from 'graphql-tag'

const ARTICLES_QUERY = gql`
query {
  articles(
    filter: {
      promote: true,
      destination: 291, 
      topic: 2017
    }
    page: {
      limit: 50, 
      offset: 0
    }
    sort: {
      field: "authorship_date", 
      direction: DESC
    }
  ) {
    data {
      id
      slug
      title
      subtitle
      summary
      authorship_date {
        raw
        unformatted
        formatted_long
        formatted_short
        time
        unix
        unix_int
      }
      destination {
        tid
        name
        slug
      }
      topics {
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
        alt
        description
        caption
        url
        url_600_338
        url_828_315
        url_1200_630
        url_1500_500
        url_1920_1080
        url_2560_1440
      }
      hero_image {
        alt
        description
        caption
        url
        url_600_338
        url_828_315
        url_1200_630
        url_1500_500
        url_1920_1080
        url_2560_1440
      }
      hero_video {
        id
        title
        url
        description
        running_time
      }
    }
  }
}
`

export default ARTICLES_QUERY
