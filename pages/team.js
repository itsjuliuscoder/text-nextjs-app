import { Fragment } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Banner from '../components/slider/banner';
import Team from '../components/team/team';

function TeamPage() {
  return (
    <Fragment>
      <Head>
        <title>Team - Alles Charis</title>
        <meta
          name='description'
          content='A testing nextjs web app.'
        />
      </Head>
      <Team />
    </Fragment>
  );
}

export default TeamPage;
