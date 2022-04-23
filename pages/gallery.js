import { Fragment } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Banner from '../components/slider/banner';

function GalleryPage() {
  return (
    <Fragment>
      <Head>
        <title>Gallery - Alles Charis</title>
        <meta
          name='description'
          content='A testing nextjs web app.'
        />
      </Head>
      <Banner />
    </Fragment>
  );
}

export default GalleryPage;
