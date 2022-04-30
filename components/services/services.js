import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import classes from './services.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Services() {
  return (
    <>
        <div className={classes.banner}>
          <Container>
              <Row className={classes.banner_text}>
                  <h3>Services</h3>
                  <p>Our services are reliable and follow all safety and quality standards. We have used technology, industry expertise and world class research facility to build a strong business. Our hardworking team are eager to help your business and our customers reach their full potentials through satisfaction.</p>
              </Row>
          </Container>
        </div>
        <div className={classes.body}>
            <Container>
              <Row className="mt-4">
                    <div className={classes.service_row}>
                        <h2>The Operations</h2>
                        <h5>LPG logistics solutions</h5>
                        <h5>LPG solutions consultancy</h5>
                        <h5>Bulk installations for industries</h5>
                        <h5>Gas off-taking</h5>
                        <h5>Gas storage</h5>
                    </div>
              </Row>
              <hr />
              <Row>
                  <h2>LPG logistics solutions</h2>
                  <p>Alles Charis Gas has a brand-new fleet of state-of-the-art Howo trucks for bulk buyers, and delivery trucks for industrial users, wholesalers, retailers, and even end users. This ensures the highest convenience of our dear customers.</p>
              </Row>
              <Row className="mt-4">
                  <h2>LPG solutions Consultancy</h2>                  
                  <p> We make gas available for businesses and offer advice on how to maximise best practices on preventing (and solving) common problems that regard the usage of LPG in large quantity.</p>
              </Row>
              <Row className="mt-4">
                  <h2>Retail Services and Doorstep Delivery</h2>                  
                  <p>Here at Alles Charis, we provide retail services which include discounted sales to wholesalers and retailers and direct sales to end users.</p>
              </Row>
              <Row className="mt-4">
                  <h2>Bulk Installations for Industries</h2>
                  <p>Supporting businesses with high LPG consumption is also something we are passionate about here, at ACGL. We provide and install tanks upwards of 1 MT to our bulk buyers and users for easier access to gas, and seamless supply of gas to these businesses.</p>
              </Row>
              <Row className="mt-4">
                  <h2>Gas off-taking</h2>
                  <p> To ensure constant availability, we partner with other reliable gas producers so that we never runout of stock. This means that our customers can always depend on us for constant LPG supply.</p>
              </Row>
              <Row className="mt-4">
                  <h2>Gas Storage</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique lacus, tincidunt consequat cras convallis semper. Curabitur pellentesque semper risus feugiat. Venenatis amet, etiam leo nunc nulla posuere orci. Dolor velit vitae, massa tincidunt mauris sed. Id commodo dolor elementum odio. Amet netus erat sagittis, neque, tortor, eu. Id tristique faucibus erat senectus nisl. Neque turpis pellentesque tincidunt eu ut adipiscing pulvinar. Nunc, lectus ante cursus sit fames adipiscing a, varius. Pharetra, lectus amet tincidunt vivamus. Nulla ac interdum nullam rhoncus.</p>
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

export default Services;
