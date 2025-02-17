import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Register = () => {
  const [clientData, setClientData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [providerData, setProviderData] = useState({
    name: '',
    email: '',
    phone: '',
    servicesOffered: '',
    availability: '',
    password: '',
  });

  // Handle client form changes
  const handleClientChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  // Handle provider form changes
  const handleProviderChange = (e) => {
    setProviderData({ ...providerData, [e.target.name]: e.target.value });
  };

  // Handle client registration form submission
  const handleSubmitClient = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/clients/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Client registered successfully!');
        // Redirect to login or dashboard here
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering client:', error);
      alert('Registration failed');
    }
  };

  // Handle service provider registration form submission
  const handleSubmitProvider = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/service-providers/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(providerData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Service provider registered successfully!');
        // Redirect to login or dashboard here
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering provider:', error);
      alert('Registration failed');
    }
  };

  return (
    <Container className="section-padding">
      <h2 className="text-center mb-4">Register</h2>
      <Row>
        {/* Client Registration Form */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Client Registration</Card.Title>
              <Form onSubmit={handleSubmitClient}>
                <Form.Group controlId="formClientName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={clientData.name}
                    onChange={handleClientChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formClientEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={clientData.email}
                    onChange={handleClientChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formClientPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    name="phone"
                    value={clientData.phone}
                    onChange={handleClientChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formClientPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={clientData.password}
                    onChange={handleClientChange}
                    required
                  />
                </Form.Group>

                <Button className='btn-orange btn mt-3 border-0' type="submit">
                  Register as Client
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Service Provider Registration Form */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Service Provider Registration</Card.Title>
              <Form onSubmit={handleSubmitProvider}>
                <Form.Group controlId="formProviderName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={providerData.name}
                    onChange={handleProviderChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formProviderEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={providerData.email}
                    onChange={handleProviderChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formProviderPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    name="phone"
                    value={providerData.phone}
                    onChange={handleProviderChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formServicesOffered">
                  <Form.Label>Services Offered</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter services you offer"
                    name="servicesOffered"
                    value={providerData.servicesOffered}
                    onChange={handleProviderChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAvailability">
                  <Form.Label>Availability</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter availability"
                    name="availability"
                    value={providerData.availability}
                    onChange={handleProviderChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formProviderPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={providerData.password}
                    onChange={handleProviderChange}
                    required
                  />
                </Form.Group>

                <Button className='btn-orange btn mt-3 border-0 border-0' type="submit">
                  Register as Service Provider
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
