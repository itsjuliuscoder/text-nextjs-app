import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import classes from './abanner.module.css';
import Link from 'next/link'; 

function ABanner() {
  return (
    <>
        <div className={classes.banner}>
            <Container>
                <Row className={classes.banner_text}>
                    <Col xs={12} md={6}>
                        <h3>Your One Stop Integrated</h3>
                        <h3>LPG Supplier</h3>
                        <p>Creating a seamless chain of value added service along LPG supply chain by delivering exceptional and on–time service.</p>
                        <Link href="/about" passHref={true}><Button className={classes.btnStyle}>Learn More</Button></Link>
                        {/* <Button><Link href="/about"></Link></Button> */}
                    </Col>
                    <Col xs={12} md={6}>
                      
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default ABanner;
