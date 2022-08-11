import Layout from "@components/layout/Layout";
import Hero from "@modules/hero/Hero";
import About from "@modules/about/About";
import Skills from "@modules/skills/Skills";
import Projects from "@modules/projects/Projects";

import { hygraphClient } from "src/common/hygraph/client";
import { pageQuery } from "src/common/hygraph/queries";

const Home = () => {
  return (
    <Layout>
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const { posts } = await hygraphClient.request(pageQuery);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
