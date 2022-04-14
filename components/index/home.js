import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import classes from './home.module.css';

function Home() {
  return (
    <>
        <div className={classes.body}>
            <Container>
              <Row>
                  <div className={classes.inner_body}>
                    <h2>Safely “gassing” you up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nibh morbi commodo suspendisse pellentesque lacus. Cras convallis risus, vestibulum purus est. Dui, integer amet massa mi adipiscing nunc eget feugiat porttitor. Augue habitant eu convallis nibh sed lorem elit ut interdum. Eget malesuada mattis lacus sit. Gravida lorem a in vestibulum viverra amet eget. Mollis ac viverra ipsum eu. Tortor pellentesque cursus bibendum blandit luctus elementum proin scelerisque at. Egestas suspendisse tortor, cras facilisis vitae aliquam, placerat posuere sed. At scelerisque ultrices leo magna proin molestie aliquet faucibus sagittis. Ullamcorper sed nisl magna ullamcorper ut vitae. Consequat rutrum lorem purus. Alles Charis does this under two brands. ALLES CHARIS GAS and ALLES CHARIS LOGISTICS.</p>
                  </div>
              </Row>
            </Container>
        </div>
        <div className={classes.body_lower}>
            <Container>
                <Row>
                    <div className={classes.body_lower_text}>

                    </div>
                </Row>
            </Container>
        </div>
        <div className={classes.body_values}>
            <Container>
                <Row>
                    
                </Row>
            </Container>
        </div>
    </>
  );
}

export default Home;
