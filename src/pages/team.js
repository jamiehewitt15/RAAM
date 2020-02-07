import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About the Tean...</h1>
    <p>Here's our Team:</p>
    <ul>
        <li>Alec</li>
        <li>Pierre</li>
        <li>Jamie</li>
        <li>Matt</li>
    </ul>
    <p>We're still working on our team name...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage