import Layout from "@components/layout/Layout";
import Hero from "@modules/hero/Hero";
import About from "@modules/about/About";
import Skills from "@modules/skills/Skills";
import Projects from "@modules/projects/Projects";
import Contact from "@modules/contact/Contact";

import { hygraphClient } from "src/common/hygraph/client";
import { pageQuery } from "src/common/hygraph/queries";

import { IPosts } from "@modules/projects/Projects.interfaces";

const Home = ({ posts }: IPosts) => {
  return (
    <Layout>
      <>
        <Hero />
        <About />
        <Skills />
        <Projects posts={posts} />
        <Contact />
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
