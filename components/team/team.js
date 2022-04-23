import { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import classes from './team.module.css';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Team() {
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
                    <h2>The Team</h2>
                    <h5>Olusegun Adegbulugbe</h5>
                    <h5>Samuel Ogbole</h5>
                    <h5>Bernard Ogunkuade</h5>
                    <h5>Ernest Osuigbo</h5>
                    <h5>Folajomi Adegbulugbe</h5>
                  </div>
              </Row>
              <hr />
              <Row>
                  <Col xs={12} md={6}>
                      <h5 className={classes.tit}>Olusegun Adegbulugbe</h5>
                      <h3>Position</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique lacus, tincidunt consequat cras convallis semper. Curabitur pellentesque semper risus feugiat. Venenatis amet, etiam leo nunc nulla posuere orci. Dolor velit vitae, massa tincidunt mauris sed. Id commodo dolor elementum odio. Amet netus erat sagittis, neque, tortor, eu. Id tristique faucibus erat senectus nisl. Neque turpis pellentesque tincidunt eu ut adipiscing pulvinar. Nunc, lectus ante cursus sit fames adipiscing a, varius. Pharetra, lectus amet tincidunt vivamus. Nulla ac interdum nullam rhoncus. </p>
                  </Col>
                  <Col xs={12} md={6}>
                      <Image src="/images/team_01.png" width={500} height={374} />
                  </Col>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vitae a lacus mauris. Vivamus etiam morbi massa in condimentum lacus. Potenti nec porta ornare tincidunt. Eget et lobortis diam orci mauris suspendisse sed nullam eget. Pulvinar molestie sapien eu malesuada. Imperdiet turpis neque ut dignissim tellus sit arcu lectus. Ac aliquet urna accumsan, tellus mi. Bibendum elementum montes, sem tortor. Et dui aliquet suspendisse ornare porttitor. Tempor ut consequat fringilla eget condimentum aliquet. Sit morbi viverra elementum netus.
                    Amet orci eget ut leo faucibus ut dui tincidunt turpis. Ut pretium, turpis porta duis scelerisque. Consectetur gravida scelerisque morbi velit pellentesque etiam felis, morbi. Pretium faucibus nunc enim urna et tortor scelerisque. Ipsum nullam cursus sagittis, eros non, nullam dictum risus. Tristique velit, ipsum dapibus faucibus gravida imperdiet massa ullamcorper amet. Sit fusce purus lobortis a elementum, sollicitudin. At feugiat venenatis urna, arcu adipiscing. Diam amet neque vel nisl mauris, nunc nec pulvinar. Diam semper sociis sapien aliquet in. Adipiscing nisi velit, leo suspendisse erat lacus.
                  </p>
              </Row>
              <Row className="mt-4">
                  <Col xs={12} md={6}>
                      <h5 className={classes.tit}>Samuel Ogbole</h5>
                      <h3>Executive director</h3>
                      <p>Samuel has garnered international experiences with key achievements in countries like Kenya and England in the non-profit, Public and Private sectors in Programme management, finance and operations roles.</p>
                      <p>Samuel Ogbole oversees the administrative, human resource, and project management affairs in Alles Charis, making sure that the requirements for success are met from hiring, to overseeing projects, and ascertaining a smart work environment.</p>
                  </Col>
                  <Col xs={12} md={6}>
                      <Image src="/images/team_01.png" width={500} height={374} />
                  </Col>
                  <p>He is a graduate of Management from the prestigious Warwick Business School, Coventry, UK.</p>
              </Row>
              <Row className="mt-4">
                  <Col xs={12} md={6}>
                      <h5 className={classes.tit}>Folajomi Adegbulugbe</h5>
                      <h3>Executive director</h3>
                      <p>Folajomi Adegbulugbe is an innovative and performance driven Entrepreneur with a passion for consumer, technology, and finance.</p>
                      <p>He has earned two M.Sc.’s; International Business (Distinction), and Finance (Distinction) from the Hult International Business School, Boston. Prior to the aforementioned educational achievements, he graduated from the Obafemi Awolowo University, Ile-Ife with a BSc. in Consumer science (Hospitality management).</p>
                  </Col>
                  <Col xs={12} md={6}>
                      <Image src="/images/team_01.png" width={500} height={374} />
                  </Col>
                  <p>Before Alles Charis, Folajomi founded and co-founded some ventures such as the Jo pizza company, Furnisheet Lifestyle company and Pristin, leading the businesses to be value driven and self-sustainable. After which he went on to take on the role of Market intelligence officer with Venture Garden group the proceeded to All Grace Energy as a business development and strategy officer.</p>
              </Row>
              <Row className="mt-4">
                  <Col xs={12} md={6}>
                      <h5 className={classes.tit}>Kayode Adegbulugbe</h5>
                      <h3>Special Adviser to the Chairman</h3>
                      <p>Kayode Adegbulugbe is a multi-skilled professional with 20 years of Oil Industry experience.</p>
                      <p>He holds an MSc. Degree in Petroleum Engineering from the University of Texas Austin, an LLM Oil and Gas Law (Distinction) from Robert Gordon University and a BSc. in Chemical Engineering from the Obafemi Awolowo University, Ile-Ife.</p>
                  </Col>
                  <Col xs={12} md={6}>
                      <Image src="/images/team_01.png" width={500} height={374} />
                  </Col>
                  <p>Kayode has garnered vast experiences; from working  with Andersen (now KPMG) and several Nigeria Oil and Gas organizations as financial consultant that performed financial audits; to his valuable contribution in supporting the Gulf of Mexico projects as reservoir and product engineer at Shell International Oil Company in New Orleans; to his 14 year tenure in Chevron International Oil and Gas, Houston, Angola, and Nigeria in senior production engineering, completions engineering and drilling engineering roles.</p>
                  <p>Kayode is currently a director and special adviser to the Chairman of Green Energy International Limited and All Grace Energy Limited, two successful indigenous marginal field operators in Nigeria. In his role, he leads a multi-functional group of professionals in implementing the strategic goals of the two companies.</p>
              </Row>
              <Row className="mt-4">
                  <Col xs={12} md={6}>
                      <h5 className={classes.tit}>Abdul Musa Abubakar</h5>
                      <h3>General Manager</h3>
                      <p>Engr. Abdul is responsible for the fluid logistics operations in the Alles Charis Group and has amassed over 20 years of professional experience in the field of Transportation, Warehousing, Inventory Management, Fleet Maintenance & Management, as well as Logistics and Supply chain management. He has been able to develop and maintain distinctive performances, ensuring that all parts of the department carry out logistics operations seamlessly.
                        Prior to working with Alles Charis, Engr. Abdul built a solid professional background.</p>
                  </Col>
                  <Col xs={12} md={6}>
                      <Image src="/images/team_01.png" width={500} height={374} />
                  </Col>
                  <p>Excelling in Multinational oil and gas, engineering, logistics, and transportation organizations like A.G. Leventis, Nigerian Bottling Company limited, (a member of the Coca-cola Hellenic group), SAB Miller, Anheuser-Busch InBev, Dangote Industries Limited, and Muang Global Services Limited in key positions and roles, like Fleet operations Manager, Head of Transport and Logistics, and Head of Logistics Operations, West Africa, where he delivered in managing the overall daily logistics operations.</p>
                  <p>Engr. Abdul has a Mechanical Engineering, B. Eng. from Federal University of Technology, Minna, Niger State; an MBA from Lagos State University, Ojo, Lagos state and an MSc., from Ladoke Akintola University of Technology, Ogomosho, Oyo State.
                    He is an accredited corporate member of the Nigerian Society of Engineers (MNSE); American Society of Mechanical Engineers (MASME); Nigerian Institutions of Mechanical Engineers (MNIME); Institute of International Business & Logistics (AIIBL)( as Associate member); The Chartered Institute of Logistics and Transport - UK (CMILT); (as Chartered Member), as well as A Registered member of the Council for the Regulation of Engineering in Nigeria (COREN) and Certified Practitioner in Warehouse and Inventory Management - UK (CPWIM)</p>
              </Row>
            </Container>
        </div>
        <div className={classes.footer_section}>
            <Container>
                <Row className="mt-4">
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

export default Team;
