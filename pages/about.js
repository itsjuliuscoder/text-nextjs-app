import { Fragment } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Banner from '../components/slider/banner';
import About from '../components/about/about';

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title></title>
        <meta
          name='description'
          content='A testing nextjs web app.'
        />
      </Head>
      <Banner />
      <About />
    </Fragment>
  );
}

export default AboutPage;
