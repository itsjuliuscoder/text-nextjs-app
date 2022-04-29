import { Fragment } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Gallery from "../components/gallery/gallery";

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
      <Gallery />
    </Fragment>
  );
}

export default GalleryPage;
