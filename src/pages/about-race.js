import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About the Race...</h1>
    <p>Here's our plan:</p>
    <ul>
      <li>Cycle as fast as possible</li>
      <li>Don't crash</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage