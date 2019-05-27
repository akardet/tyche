import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Personal from "../components/personal";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Personal />
  </Layout>
);

export default IndexPage;
