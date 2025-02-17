import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can add your form submission logic here
  };

  return (
    <section>
      <Container className='section-padding'>
        <Row>
          <Col lg={6}>
            <h1>Contact Us</h1>
            <h6>We’d love to hear from you! Whether you have a question, need assistance, or want to provide feedback, our team at Handyman is here to help. Feel free to reach out to us through any of the following methods:</h6>
            <ul>
  <li>
    <FontAwesomeIcon icon={faPhone} className="me-2 fs-4" />
    +91 9496456475
  </li>
  
  <li>
    <FontAwesomeIcon icon={faEnvelope} className="me-2 fs-4" />
    handyman@gmail.com
  </li>
  
  <li>
    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 fs-4" />
    MNRA-184, Tripunithra, Ernakulam
  </li>
</ul>

          
          </Col>
          <Col lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </Form.Group>

              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button className="btn-orange btn mt-3" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
