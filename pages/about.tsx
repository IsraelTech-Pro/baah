import Head from 'next/head';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Baah Gyan Richmond</title>
        <meta name="description" content="About Baah Gyan Richmond: Ghana Police Officer and Network Engineer." />
      </Head>
      <About />
    </>
  );
}
