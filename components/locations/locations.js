import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import classes from './locations.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { InputGroup, FormControl, Button, Accordion } from "react-bootstrap";
import MapSection from "../map/Map";

function Location() {

    const location = {
        address: 'B39 close Citec Estate Mbora AMAC, 900271, Abuja.',
        lat: 9.072264,
        lng: 7.491302,
      } // our location object from earlier


  return (
    <>
        <div className={classes.banner}>
          <Container>
              <Row className={classes.banner_text}>
                  <h3>Locations</h3>
                  <p>Need to find the easiest place to reach us? Our Station Locator helps you find the closest station to you. Your convenience is our priority.</p>
              </Row>
          </Container>
        </div>
        <div className={classes.body}>
            <Container>
                <Row className={classes.body_row}>
                    <h4>Find a Solution</h4>
                    <hr />
                </Row>
                <Row className={classes.body_row_left}>
                    <Col xs={12} md={4}>
                        <Row>
                            <>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder=""
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <FaSearch />
                                </Button>
                            </InputGroup>
                            </>
                        </Row>
                        <Row>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Lagos</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Ondo</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Abuja</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Ondo</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </Row>
                        <Row className={classes.mapTitle}>
                            <h3>All Stations</h3>
                        </Row>
                        <Row>
                            <FaMapMarkerAlt style={{ fontSize: '2em', marginTop: '9px' }} />
                            {/* icons */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus luctus ac euismod ante senectus nibh. In vitae in diam vivamus. 
                            Amet sapien pretium ullamcorper duis quis sodales. Sed egestas ornare id at arcu erat. Nec phasellus massa vitae.</p>
                            <Button className={classes.button}>Directions</Button>
                        </Row>
                        <Row>
                            <FaMapMarkerAlt style={{ fontSize: '2em', marginTop: '9px' }} />
                            {/* icons */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus luctus ac euismod ante senectus nibh. In vitae in diam vivamus. 
                            Amet sapien pretium ullamcorper duis quis sodales. Sed egestas ornare id at arcu erat. Nec phasellus massa vitae.</p>
                            <Button className={classes.button}>Directions</Button>
                        </Row>
                    </Col>
                    <Col xs={12} md={8}>
                        <MapSection location={location} zoomLevel={17} />
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
                            <li>Services</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={7}>
                        <ul className={classes.footer_list_right}>
                            <li>
                                <Link href="https://instagram.com/allescharis" passHref><a target="_blank" rel="noopener"><FaInstagram /></a></Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/allescharis" passHref><a target="_blank" rel="noopener"><FaTwitter /></a></Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/alles-charis/" passHref><a target="_blank" rel="noopener"><FaLinkedin /></a></Link>
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

export default Location;
