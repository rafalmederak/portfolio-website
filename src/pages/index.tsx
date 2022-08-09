import Layout from "@components/layout/Layout";
import Hero from "@modules/hero/Hero";
import About from "@modules/about/About";
import Skills from "@modules/skills/Skills";
import Projects from "@modules/projects/Projects";

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
