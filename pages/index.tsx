import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Baah Gyan Richmond | Portfolio</title>
        <meta name="description" content="Professional portfolio of Baah Gyan Richmond: Ghana Police Officer and Network Engineer." />
      </Head>
      <Hero />
    </>
  );
}
