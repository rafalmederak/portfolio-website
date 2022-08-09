import Layout from "@components/layout/Layout";
import Hero from "@modules/hero/Hero";
import About from "@modules/about/About";
import Skills from "@modules/skills/Skills";

const Home = () => {
  return (
    <Layout>
      <>
        <Hero />
        <About />
        <Skills />
      </>
    </Layout>
  );
};

export default Home;
