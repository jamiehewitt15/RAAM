import React from "react"
import { Link } from "gatsby"
import { Typography } from 'antd';
import { Card } from 'antd';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const { Title } = Typography;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Card>
      <Title>Welcome to the RAAM 2020 website!</Title>
      <p>It's going to be a great race.</p>
      <Link to="/about-race/">About the Race</Link><br />
      <Link to="/team/">Meet the team</Link><br />
      <p>Follow this site for updates...</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    </Card>
    

  </Layout>
)

export default IndexPage
