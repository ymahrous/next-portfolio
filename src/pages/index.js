import { Layout } from '../layout/Layout';
import Hero from '../components/Hero/Hero';
import { Section } from '../styles/GlobalComponents';
import Timeline from '../components/TimeLine/TimeLine';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;