import { Fragment } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Banner from '../components/slider/banner';
import Locations from '../components/locations/locations';

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>Locations - Alles Charis</title>
        <meta
          name='description'
          content='A testing nextjs web app.'
        />
      </Head>
      <Locations />
    </Fragment>
  );
}

export default AboutPage;
