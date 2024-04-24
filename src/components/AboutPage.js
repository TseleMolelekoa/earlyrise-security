import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import companyImage from '../components/Assets/IMG-20240414-WA0039.jpg';
import militaryLogo from '../components/Assets/militaryveterans.jpg'; // Corrected import name
import './styles/main.css';

const AboutPage = () => {
    return (
        <div className="about" id="About">
            <Container>
                <Row>
                    <Col md={7}>
                        <div>
                            <h1>Why Us?</h1>
                            <p>
                                <b>Early Rise Security Services</b> is a leading security company dedicated to providing high-quality and innovative security solutions. We are a 100% Black-owned PSIRA registered Military Veteran Security Company. We provide high-quality security services, innovative surveillance, access control systems, tactical response, and expert consulting.
                            </p>
                            <p>
                                Our focus is on professionalism, discretion, and confidentiality. With experience in both private and government sectors, we offer effective security solutions.
                            </p>
                            <p>
                                <b>Our mission</b> is to ensure the safety and protection of our clients through professionalism, discretion, and effective security measures.
                            </p>
                            <p>
                                With experience in both private and government sectors, we offer a wide range of security services tailored to meet individual needs.
                            </p>
                            <p>
                                Contact us today to learn more about how we can enhance your security and provide peace of mind.
                            </p>
                        </div>
                        <div className="references" style={{ display: 'flex', alignItems: 'center' }}>
                            <h3>Registered with: </h3>
                            <div style={{ marginRight: '20px' }}>
                                <p>➡ REG NO: 2005/159429/23</p>
                                <p>➡ PSIRA NO: 2666612</p>
                                <p>➡ CSD NO: MAAAA0931696</p>
                            </div>
                            <img src={militaryLogo} alt="Company Logo" className="military-logo" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="image-container">
                            <img src={companyImage} alt="Early Rise Security Services Office Entrance" className="img-fluid" />
                            <p className="director-text">DIRECTOR: PRINCE MATHEBULA</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutPage;
