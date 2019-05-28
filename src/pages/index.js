import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Profile from "../components/profile";
import About from "../components/about";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
    <About />
  </Layout>
);

export default IndexPage;
