import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import classes from './services.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Services() {
  return (
    <>
        <div className={classes.banner}>
          <Container>
              <Row className={classes.banner_text}>
                  <h3>Our Team</h3>
                  <p>With a Management Team with a proven track record of excellence and people development, the high quality of decision makers leading the company gives assurance of quality decision making and exceptional business development.</p>
              </Row>
          </Container>
        </div>
        <div className={classes.body}>
            <Container>
              <Row>
                  <div className={classes.inner_body}>
                    <h2>Safely “gassing” you up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nibh morbi commodo suspendisse pellentesque lacus. Cras convallis risus, vestibulum purus est. Dui, integer amet massa mi adipiscing nunc eget feugiat porttitor. Augue habitant eu convallis nibh sed lorem elit ut interdum. Eget malesuada mattis lacus sit. Gravida lorem a in vestibulum viverra amet eget. Mollis ac viverra ipsum eu. Tortor pellentesque cursus bibendum blandit luctus elementum proin scelerisque at. Egestas suspendisse tortor, cras facilisis vitae aliquam, placerat posuere sed. At scelerisque ultrices leo magna proin molestie aliquet faucibus sagittis. Ullamcorper sed nisl magna ullamcorper ut vitae. Consequat rutrum lorem purus.</p>
                    <p>Alles Charis does this under two brands. <span className={classes.colored}>ALLES CHARIS GAS</span> and <span className={classes.colored}>ALLES CHARIS LOGISTICS.</span></p>
                  </div>
              </Row>
            </Container>
        </div>
        <div className={classes.team_banner}>
            <Container>
                <Row className='mt-4'>
                    <h4>Management Team</h4>
                    <p>With a world-class team of visionaries with records in leadership and problem solving, the company has great mind assets always focused on breaking new ground with both long and short term goals.</p>
                    {/* <Link href="#" className="btn btn-default mt-2">Welcome</Link> */}
                    <button style={{ width: '15%', backgroundColor: '#84B4C8' }} type="button" className='btn btn-md mt-2'>Meet the Team</button>
                </Row>
            </Container>
        </div>
        <div className={classes.product_section}>
            <Container>
                <Row>
                    <Container>
                        <Row className="mt-3">
                            <h4 className='mb-3'>Products</h4>
                            <Col xs={12} md={4}>
                                <Image src='/images/col_img.png' width="420" height="420" alt="Column Image" />
                                <h5 className='mt-3'>Our Stations</h5>
                                <p className='mt-2'>Need gas? With storage facilities of over 1500 tonnes, check out our <span className={classes.colored}>Station Locator</span> to find the nearest station to you.</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image src='/images/col_img.png' width="420" height="420" alt="Column Image" />
                                <h5 className='mt-3'>Company Profile</h5>
                                <p className='mt-2'>Interested in our story, read our <span className={classes.colored}>Company Profile</span> to find out more or <span className={classes.colored}>Contact Us.</span></p>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image src='/images/col_img.png' width="420" height="420" alt="Column Image" />
                                <h5 className='mt-3'>Our Stations</h5>
                                <p className='mt-2'>Need gas? With storage facilities of over 1500 tonnes, check out our <span className={classes.colored}>Station Locator</span> to find the nearest station to you.</p>
                            </Col>
                        </Row>
                    </Container>
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
                            <li>Services</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={7}>
                        <ul className={classes.footer_list_right}>
                            <li>
                               <FaFacebookSquare />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaLinkedin />
                            </li>
                            <li>
                                <FaYoutube />
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

export default Services;
