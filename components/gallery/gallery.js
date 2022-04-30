import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import classes from './gallery.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Gallery() {
  return (
    <>
        <div className={classes.banner}>
          <Container>
              <Row className={classes.banner_text}>
                  <h3>Gallery</h3>
              </Row>
          </Container>
        </div>
        <div className={classes.body}>
            <Container>
                <Row className="mt-4">
                    <Col xs={12} md={4}>
                        <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                    <Col xs={12} md={4}>
                            <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                    <Col xs={12} md={4}>
                            <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} md={4}>
                        <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                    <Col xs={12} md={4}>
                            <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                    <Col xs={12} md={4}>
                            <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} md={4}>
                        <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                    <Col xs={12} md={4}>
                            <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                    <Col xs={12} md={4}>
                            <Image src="/images/col_img.png" height={335} width={425} />
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={classes.footer_section_upper}>
            <Container>
                <Row className="mt-3">
                    <Col xs={12} md={4}>
                        <h4>About Us</h4>
                        <p>Olusegun Adegbulugbe</p>
                        <p>Our Team</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>Services</h4>
                        <p>Operations</p>
                        <p>Station Locator</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>Contact</h4>
                        <p>Contact Details</p>
                        <p>Career Opportunities</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={classes.footer_section}>
            <Container>
                <Row className="mt-3">
                    <Col xs={12} md={5}>
                        <ul className={classes.footer_list_left}>
                            <li>Contact Us</li>
                            <li>Gallery</li>
                            <li>Careers</li>
                            <li>Gallery</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={7}>
                        <ul className={classes.footer_list_right}>
                            <li>
                               <li>
                                <Link href="https://instagram.com/allescharis" passHref><a target="_blank" rel="noopener"><FaInstagram /></a></Link>
                            </li>
                            </li>
                            <li>
                                <Link href="https://twitter.com/allescharis" passHref><a target="_blank" rel="noopener"><FaTwitter /></a></Link>
                            </li>
                            <li>
                                <li>
                                <Link href="https://www.linkedin.com/company/alles-charis/" passHref><a target="_blank" rel="noopener"><FaLinkedin /></a></Link>
                            </li>
                            </li>
                            
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={classes.footer_section_lower}>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        
                    </Col>
                    <Col xs={12} md={4}>
                        <p className={classes.text__right}>Copyright 2022 Alles Charis Gas. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default Gallery;
