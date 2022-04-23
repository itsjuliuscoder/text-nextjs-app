import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import classes from './home.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Home() {
  return (
    <>
        <div className={classes.body_lower}>
            <Container>
                <Row>
                    <div className={classes.body_lower_text}>
                        <p>To build a profitable LPG venture, that is value driven by being involved in the end to end 
                        LPG value chain in Nigeria. To do this, we will establish excellent client service, 
                        on time – delivery and continuous support for our team members.</p>
                    </div>
                </Row>
            </Container>
        </div>
        <div className={classes.body}>
            <Container>
              <Row>
                  <div className={classes.inner_body}>
                    <p>Alles Charis Logistics (Abuja)        <span className={classes.bigText}>1500mT</span></p>
                  </div>
              </Row>
            </Container>
        </div>
        <div className={classes.body_values}>
            <Container>
                <Row>
                    <h2 className="text-center">About Us</h2>
                </Row>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={6}>
                        <h4>Alles Charis Gas</h4>
                        <p>Alles Charis Gas Limited is an end-to-end provider of gas products, solutions, and services. We leverage industry expertise with our cutting-edge technical mastery in building excellent transition of Liquified Petroleum Gas (LPG) and other gases from production to satisfaction while ensuring safety, quality, precision, and fulfillment.
                        ACGL is incorporated in Nigeria under the Companies and Allied Matters Act of 1990. The company aspires to takeover at least 10% of the market share in 10 years by thriving as a player in all phases of the LPG supply chain in Nigeria.</p>
                        <Button className={classes.btnStyle}>Read More</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src='/images/icon.png' width="494" height="281" alt="image icon" />                        
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={classes.body}>
            <Container>
                <Row className='mt-3'>
                    <h2 className="text-center">What We Do</h2>
                </Row>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={6}>
                        <h4>PRODUCTION</h4>
                        <p>With industry expertise and experience we have created a partnership with GREEN ENERGY INTERNATIONAL LIMITED to produce LPG and propane cylinder. This allows us to be a key player in the production phase of LPG.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src='/images/icon.png' width="494" height="281" alt="image icon" />                        
                    </Col>
                </Row>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={6}>
                        <Image src='/images/icon.png' width="494" height="281" alt="image icon" />                        
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>DISTRIBUTION</h4>
                        <p>With industry certified Bridgers we intend to carry LPG from the production field to our different storage facility across the country. We will also help our clients carry from coastal or inland facilities over long distances. Our 
                        Bob-Tails will be used for short distance distribution and logistics.
                        We have covered over 1.3 million Kilometers, so far.</p>
                    </Col>
                </Row>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={6}>
                        <h4>STORAGE</h4>
                        <p>We have built storage facilities across the nation to ease the distribution of LPG. Adherence to safety standards and in time delivery will ensure customer satisfaction.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src='/images/icon.png' width="494" height="281" alt="image icon" />                        
                    </Col>
                </Row>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={6}>
                        <Image src='/images/icon.png' width="494" height="281" alt="image icon" />                        
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>RETAIL</h4>
                        <p>To be truly end to end, we will serve end users for personal or commercial use. The satisfaction of the end user is our goal.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={classes.team_banner}>
            <Container>
                <Row className='mt-4'>
                    <h4>Company Profile</h4>
                    <p>Alles Charis Gas limited was founded in February 2018, to close the vacuum that could be found in the supply chain of the gas industry in Nigeria.
                    This means that the company fulfils the needs of every level of consumer that may need gas products by offering a range of products and services from bulk sales, logistics, storage, wholesale, retail, project management and installations of engineering equipment.</p>
                    {/* <Link href="#" className="btn btn-default mt-2">Welcome</Link> */}
                    <button style={{ width: '15%', backgroundColor: '#84B4C8', marginLeft: '8px' }} type="button" className='btn btn-md mt-2'>Company Profile</button>
                </Row>
            </Container>
        </div>
        <div className={classes.product_section}>
            <Container>
                <Row>
                    <Container>
                        <Row className="mt-3">
                            <Col xs={12} md={4}>
                                <Image src='/images/col_img.png' width="420" height="420" alt="Column Image" />
                                <h4 className={classes.footer_title}>About Us</h4>
                                <p className={classes.footer_para}>Olusegun Adegbulugbe</p>
                                <p className={classes.footer_para}>Our Team</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image src='/images/col_img.png' width="420" height="420" alt="Column Image" />
                                <h4 className={classes.footer_title}>Services</h4>
                                <p className={classes.footer_para}>Operations</p>
                                <p className={classes.footer_para}>Operations</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image src='/images/col_img.png' width="420" height="420" alt="Column Image" />
                                <h4 className={classes.footer_title}>Contact</h4>
                                <p className={classes.footer_para}>Contact Details</p>
                                <p className={classes.footer_para}>Careers Opportunities</p>
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

export default Home;
