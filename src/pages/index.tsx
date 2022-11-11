import Head from 'next/head';

import { hygraphClient } from 'src/common/hygraph/client';
import { postsQuery } from 'src/common/hygraph/queries';

import About from '@modules/about/About';
import Contact from '@modules/contact/Contact';
import Hero from '@modules/hero/Hero';
import Projects from '@modules/projects/Projects';
import { IPosts } from '@modules/projects/Projects.interfaces';
import Skills from '@modules/skills/Skills';

import Layout from '@components/layout/Layout';

const Home = ({ posts }: IPosts) => {
  return (
    <>
      <Head>
        <title>Rafał Męderak | Web development</title>
        <meta
          name="description"
          content="I am a website freelancer from Poland, and I study at the Higher School of Economy and IT in Cracow. I have been creating websites as a freelance web developer for the last three years."
        />
      </Head>
      <Layout>
        <>
          <Hero />
          <About />
          <Skills />
          <Projects posts={posts} />
          <Contact />
        </>
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { posts } = await hygraphClient.request(postsQuery);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
