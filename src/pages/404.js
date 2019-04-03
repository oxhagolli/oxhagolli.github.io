import React from 'react'
import Layout from '../components/layout'

import wrong from "../images/wrong.gif"

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND!</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <img src={wrong} alt="Oops!" />
  </Layout>
)

export default NotFoundPage
