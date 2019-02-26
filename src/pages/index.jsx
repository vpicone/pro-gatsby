import React from "react";
// import { Link, StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Listing from "../components/listing";
import SEO from "../components/seo";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Listing />
  </Layout>
);

export default IndexPage;
