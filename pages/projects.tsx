import Head from 'next/head';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Baah Gyan Richmond</title>
        <meta name="description" content="Projects by Baah Gyan Richmond: Ghana Police Officer and Network Engineer." />
      </Head>
      <Projects />
    </>
  );
}
