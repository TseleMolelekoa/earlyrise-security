import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import background from '../components/Assets/IMG-20240414-WA0043.jpg'; // Import background image
import './styles/main.css';

const HomePage = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${background})` }} id="home">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Welcome to EARLY RISE SECURITY SERVICES</h1>

                        <a href="#contact" target="_self" rel="noopener noreferrer">
                            <Button variant="primary">contact us</Button>
                        </a>

  <p className="theme" style={{ fontWeight: 'bold', fontSize: '2rem' }}>
    PRODUCTIVITY - EFFICIENCY - EFFECTIVENESS.
</p>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default HomePage;
