import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';

const Header = ({ siteTitle }) => (
  <div>
      <PageHeader onBack={() => null} title={siteTitle} subTitle="The toughest endurance cycling race in the world" />

  </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
