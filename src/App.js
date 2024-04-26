import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/main.css'; // Import custom CSS styles
import HomePage from './components/homepage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/servicespage';
import GalleryPage from './components/gallerypage';
import BlogPage from './components/blogpage';
import ContactPage from "./components/contactpage";

function App() {
    return (
        <div>
            <Navbar variant="dark" expand="xxl" className="navbar" style={{top: 0, zIndex: 100, color: 'white', }}>
                {/* Logo as Navbar Brand */}
                <Navbar.Brand href="#" style={{alignContent:"center"}}><h3>Early Rise Security Services</h3>

                </Navbar.Brand>
                <p>We provide professional security services tailored to your needs, safety and peace of
                mind.
            </p>

                {/* Navbar Toggle Button */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {/* Navbar Links */}
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto"> {/* 'ms-auto' to align items to the right */}
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Render Pages */}
            <HomePage/>
            <AboutPage/>
            <ServicesPage/>
            <GalleryPage/>
            <BlogPage />
            <ContactPage/>


            {/* Footer Section */}
            <footer className="bg-dark text-white text-center p-3">
                <Container>
                    <p>&copy; 2024 Early Rise Security</p>
                    {/* Social Media Links */}
                    <div className="social-links">
                        <a href="https://web.facebook.com/profile.php?id=61559048094131" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2"/>
                        </a>
                        <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2"/>
                        </a>
                        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2"/>
                        </a>
                        <a href="https://wa.me/0615192283/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mx-2"/>
                        </a>
                        <p>Developed by: <a href="https://tselemolelekoa.web.app" >Tsele Molelekoa</a></p>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default App;
