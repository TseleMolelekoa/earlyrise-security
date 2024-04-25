import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import logo from '../components/Assets/IMG-20240414-WA0057.jpg';

const ContactPage = () => {
  const formRef = useRef(); // Ref for accessing the form element
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const result = await emailjs.sendForm(
        'service_n0zd7ga', // Replace with your EmailJS service ID
        'template_8pry18s', // Replace with your EmailJS template ID
        formRef.current,
        'TApk7hGBsM1ZZCSAQ' // Replace with your EmailJS user ID (API key)
      );

        console.log('Email successfully sent:', result.text);
      setShowSuccessAlert(true); // Show success alert
      formRef.current.reset(); // Clear the form
    } catch (error) {
      console.error('Email sending failed:', error.text);
    }
  };

   return (
    <Container className="mt-5 contact-container" id="contact">
      <Row>
        <Col md={4}>
          {/* Left Column: Contact Information and Company Logo */}
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="img-fluid" />
          </div>
          <p>Office Number: 061 519 2283</p>
          <p>Email: contact@earlyrise-security.com</p>
        </Col>
        <Col md={8}>
          {/* Right Column: Contact Form */}
          <h2>Contact Us</h2>
          <Form onSubmit={sendEmail} className="contact-form" ref={formRef}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="from_name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="reply_to" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" required />
            </Form.Group>
            {/* Add margin-top to the Button for spacing */}
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
          {/* Success Alert */}
          <Alert show={showSuccessAlert} variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
            <Alert.Heading>Email sent successfully!</Alert.Heading>
            <p>We'll get back to you as soon as possible.</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;