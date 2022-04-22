import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import classes from './about.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function About() {
  return (
    <>
        <div className={classes.body}>
            <Container>
              <Row>
                  <div className={classes.inner_body}>
                    <h2>Safely “gassing” you up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nibh morbi commodo suspendisse pellentesque lacus. Cras convallis risus, vestibulum purus est. Dui, integer amet massa mi adipiscing nunc eget feugiat porttitor. Augue habitant eu convallis nibh sed lorem elit ut interdum. Eget malesuada mattis lacus sit. Gravida lorem a in vestibulum viverra amet eget. Mollis ac viverra ipsum eu. Tortor pellentesque cursus bibendum blandit luctus elementum proin scelerisque at. Egestas suspendisse tortor, cras facilisis vitae aliquam, placerat posuere sed. At scelerisque ultrices leo magna proin molestie aliquet faucibus sagittis. Ullamcorper sed nisl magna ullamcorper ut vitae. Consequat rutrum lorem purus.</p>
                    <p>Alles Charis does this under two brands. <span class={classes.colored}>ALLES CHARIS GAS</span> and <span class={classes.colored}>ALLES CHARIS LOGISTICS.</span></p>
                  </div>
              </Row>
            </Container>
        </div>
        <div className={classes.body_lower}>
            <Container>
                <Row>
                    <div className={classes.body_lower_text}>
                        <p>From<span class={classes.bigText}>Production</span>to<span class={classes.bigText}>Distribution</span>to<span class={classes.bigText}>Retail</span>and<span class={classes.bigText}>Storage</span> the aim is the <span class={classes.bigText}>Satisfaction</span> of your needs in the most efficient way.</p>
                    </div>
                </Row>
            </Container>
        </div>
        <div className={classes.body_values}>
            <Container>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={4}>
                        <h4>Our Values</h4>
                        <p>Alles Charis was established to be an end to end LPG company which handles everything from production to retailing of LPG in Nigeria.</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className={classes.col_body}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <h5 className='mt-3 ml-2'>Efficiency</h5>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <Image src='/images/efficiency.png' width="50" height="50" alt="efficiency" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className={classes.col_body}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <h5 className='mt-3 ml-2'>Dependability</h5>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <Image src='/images/hand-shake 1.png' width="80" height="50" alt="efficiency" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={12} md={6}>
                                <div className={classes.col_body}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <h5 className='mt-3 ml-2'>Integrity</h5>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <Image src='/images/libra-svgrepo-com 1.png' width="50" height="50" alt="efficiency" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className={classes.col_body}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <h5 className='mt-3 ml-2'>Respect</h5>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <Image src='/images/prize-svgrepo-com 1.png' width="50" height="50" alt="efficiency" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={12} md={6}>
                                <div className={classes.col_body}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <h5 className='mt-3 ml-2'>Innovation</h5>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <Image src='/images/invention-svgrepo-com 1.png' width="50" height="50" alt="efficiency" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                
                            </Col>
                        </Row>
                    </Col>
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

export default About;