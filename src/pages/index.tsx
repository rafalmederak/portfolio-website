import Layout from "@components/layout/Layout";
import Hero from "@modules/hero/Hero";
import About from "@modules/about/About";

const Home = () => {
  return (
    <Layout>
      <>
        <Hero />
        <About />
      </>
    </Layout>
  );
};

export default Home;
