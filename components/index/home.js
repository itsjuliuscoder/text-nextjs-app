import { React, Fragment, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import classes from './home.module.css';
import Carousel from "react-elastic-carousel";
import { FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa";
import Item from "../item";

function Home() {

    // const item = [
    //     "<p>Well over <b>1,334,810 KM</b> covered</p>",
    //     "<p>0ver <b>1,950 trips</b> taken</p>",
    //     "<p>More than <b>39,000 metric tons</b> distributed</p>",
    // ]

    const items = [
        {
            "name": "Well over 1,334,810 KM covered",
        },
        {
            "name": "0ver 1,950 trips taken",
        },
        {
            "name": "More than 39,000 metric tons distributed",
        },
        {
            "name": "98.5% on-time delivery average",
        }
    ]
    const [currentItem, setCurrentItem] = useState(0);
    const onCurrentChange = current => {
        setCurrentItem(current.index);
    };

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
            <Carousel onNextEnd={onCurrentChange} onPrevEnd={onCurrentChange} showArrows={false} enableAutoPlay pagination={false}>
                {items.map((item, i) => {
                const className = currentItem === i ? "active" : "";
                return (
                    <Item key={item} className={className}>
                    {item.name}
                    </Item>
                );
                })}
            </Carousel>
        </div>
        <div className={classes.body_values}>
            <Container>
                <Row>
                    <h2 className="text-center mt-4" style={{ fontSize: '48px' }}>About Us</h2>
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
                    <h2 className="text-center mt-4">What We Do</h2>
                </Row>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={6} className={classes.body_values_inner_text}>
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
                    <Col xs={12} md={6} className={classes.body_values_inner_text}>
                        <h4>DISTRIBUTION</h4>
                        <p>With industry certified Bridgers we intend to carry LPG from the production field to our different storage facility across the country. We will also help our clients carry from coastal or inland facilities over long distances. Our 
                        Bob-Tails will be used for short distance distribution and logistics.
                        We have covered over 1.3 million Kilometers, so far.</p>
                    </Col>
                </Row>
                <Row className={classes.body_values_inner}>
                    <Col xs={12} md={6} className={classes.body_values_inner_text}>
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
                    <Col xs={12} md={6} className={classes.body_values_inner_text}>
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
                    <button style={{ width: '15%', backgroundColor: '#84B4C8', marginLeft: '8px', fontFamily: 'Nexa', fontWeight: '700' }} type="button" className='btn btn-md mt-2'><a target="_blank" rel="noopener" href="/assets/alles_charis_company_profile.pdf">Company Profile</a></button>
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
                                <p className={classes.footer_para}>Who We Are</p>
                                <p className={classes.footer_para}>Our Team</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image src='/images/col_img.png' width="420" height="420" alt="Column Image" />
                                <h4 className={classes.footer_title}>Services</h4>
                                <p className={classes.footer_para}>Operations</p>
                                <p className={classes.footer_para}>Station Locator</p>
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
                            <li><Link href="/contact" passHref>Contact Us</Link></li>
                            <li><Link href="/gallery" passHref>Gallery</Link></li>
                            <li><Link href="">Careers</Link></li>
                            <li><Link href="/services" passHref>Services</Link></li>
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

export default Home;
