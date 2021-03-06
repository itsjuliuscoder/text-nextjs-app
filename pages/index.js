import { Fragment } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import ABanner from '../components/slider/abanner';
import Home from '../components/index/home';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title></title>
        <meta
          name='description'
          content='A testing nextjs web app.'
        />
      </Head>
      <ABanner />
      <Home />
    </Fragment>
  );
}

export default HomePage;
