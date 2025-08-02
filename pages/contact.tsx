import Head from 'next/head';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Baah Gyan Richmond</title>
        <meta name="description" content="Contact Baah Gyan Richmond: Ghana Police Officer and Network Engineer." />
      </Head>
      <Contact />
    </>
  );
}
