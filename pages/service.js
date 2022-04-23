import { Fragment } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Services from '../components/services.js/services';

function ServicesPage() {
  return (
    <Fragment>
      <Head>
        <title>Service - Alles Charis</title>
        <meta
          name='description'
          content='A testing nextjs web app.'
        />
      </Head>
      <Services />
    </Fragment>
  );
}

export default ServicesPage;
