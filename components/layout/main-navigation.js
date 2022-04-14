import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header class={classes.header}>
      <Row>
        <Col xs={12} md={3}>
            <Image src='/images/logo.png' alt="logo" />
        </Col>
        <Col xs={12} md={9}>
            <ul>
              <li><Link href="">ABOUT US</Link></li>
              <li><Link href="">SERVICES</Link></li>
              <li><Link href="">LOCATIONS</Link></li>
              <li><Link href="">BLOG & MEDIA</Link></li>
              <li><Link href="">CONTACT</Link></li>
            </ul>
        </Col>
      </Row>
    </header>
  );
}

export default MainNavigation;
