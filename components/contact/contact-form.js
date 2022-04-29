import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import classes from './contact-form.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhoneCall } from "react-icons/fi";

function ContactForm() {
  return (
    <>
        <div className={classes.banner}>
          <Container>
              <Row className={classes.banner_text}>
                  <Col xs={12} md={8}>
                    <h3>Contact</h3>
                    <p>Want to reach out to us? Visit us at our office or contact us through any of the media below and we’ll answer your questions and Enquiries.</p>
                  </Col>
                  <Col xs={12} md={4}>

                  </Col>
              </Row>
          </Container>
        </div>
        <div className={classes.body}>
            <Container>
                <Row className="mt-3">
                    <h5>Contact</h5>
                    <h5>Careers</h5>
                </Row>
                <hr />
                <Row>
                  <Col xs={12} md={8}>
                    <h4>Contact Details</h4>
                    <Row>
                      <Col xs={12} md={1} className="mt-2">
                          <FiMapPin className={classes.icon_style} />
                      </Col>
                      <Col xs={12} md={8} className="mt-2">
                          <p>House 28, B39 close, CITEC Estate, Jabi, Airport Road, Mbora District, FCT Abuja, Nigeria.</p>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col xs={12} md={1} className="mt-2">
                          <FiMail className={classes.icon_style} />
                      </Col>
                      <Col xs={12} md={8} className="mt-2">
                          <p>info@allescharis.ng</p>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col xs={12} md={1} className="mt-2">
                          <FiPhoneCall className={classes.icon_style} />
                      </Col>
                      <Col xs={12} md={8} className="mt-2">
                          <p>+234 (0) 702 5530 076</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4}>
                    <h4>Contact Form</h4>
                    <div className={classes.formGroup}>
                      <h5>Name: </h5>
                      <input type='text' name="name" />
                    </div>
                    <div className={classes.formGroup}>
                      <h5>Email: </h5>
                      <input type='text' name="name" />
                    </div>
                    <div className={classes.formGroup}>
                      <h5>Message: </h5>
                      <textarea className={classes.textArea}></textarea>
                    </div>
                    <div className={classes.formGroup}>
                      <input type="submit" name="Submit" value="Submit" />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4 mb-4">
                  <h4>Alles Careers</h4>
                  <Col xs={12} md={8}>
                    <p>Interested in working for Us? Check Out any of the Open Positions below, send in your details and we’ll get back to you.</p>
                    <Link href="/">No current opening</Link>
                  </Col>
                  <Col xs={12} md={4}>
                    
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
                    <button style={{ width: '15%', backgroundColor: '#84B4C8' }} className='btn btn-md mt-2 textDec'><Link href="/team">Learn More</Link></button>
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

export default ContactForm;
