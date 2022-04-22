import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import classes from './banner.module.css';

function Banner(data) {
  return (
    <>
      <div className={classes.banner}>
          <Container>
              <Row className={classes.banner_text}>
                  <h3>Who We Are</h3>
                  <p>Alles Charis, an integrated LPG Supplier leveraging on industry expertise and technical prowess, uses world class equipment and technologies to help solve the problem of erratic gas supply, high price of LPG and supply shortages while empowering communities, employees and customers.</p>
              </Row>
          </Container>
      </div>
    </>
  );
}

export default Banner;
