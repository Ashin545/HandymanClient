import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // For programmatic navigation

const Login = () => {
  const [clientData, setClientData] = useState({
    email: '',
    password: '',
  });

  const [providerData, setProviderData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();  // For navigating after login

  const handleClientChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleProviderChange = (e) => {
    setProviderData({ ...providerData, [e.target.name]: e.target.value });
  };

  // The handleSubmitClient function is here
  const handleSubmitClient = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData),
      });

      // Log the response status and body for debugging
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        // Save JWT token and role in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);

        // Redirect based on role
        if (data.user.role === 'admin') {
          navigate('/admin-dashboard');
        } else if (data.user.role === 'client') {
          navigate('/client-dashboard');
        }
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in client:', error);
      alert('Login failed');
    }
  };

  const handleSubmitProvider = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/service-providers/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(providerData),
      });

      const data = await response.json();
      if (response.ok) {
        // Save JWT token and role in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);

        // Redirect based on role
        if (data.role === 'admin') {
          navigate('/admin-dashboard');
        } else if (data.role === 'service-provider') {
          navigate('/service-provider-dashboard');
        }
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in provider:', error);
      alert('Login failed');
    }
  };

  return (
    <Container className='section-padding'>
      <h2 className="text-center mb-4">Login</h2>
      <Row>
        {/* Client Login Form */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Client Login</Card.Title>
              <Form onSubmit={handleSubmitClient}>
                <Form.Group controlId="formClientEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter client email"
                    name="email"
                    value={clientData.email}
                    onChange={handleClientChange}
                  />
                </Form.Group>

                <Form.Group controlId="formClientPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter client password"
                    name="password"
                    value={clientData.password}
                    onChange={handleClientChange}
                  />
                </Form.Group>

                <Button className='btn-orange btn mt-3 border-0' type="submit">
                  Login as Client
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Service Provider Login Form */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Service Provider Login</Card.Title>
              <Form onSubmit={handleSubmitProvider}>
                <Form.Group controlId="formProviderEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter provider email"
                    name="email"
                    value={providerData.email}
                    onChange={handleProviderChange}
                  />
                </Form.Group>

                <Form.Group controlId="formProviderPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter provider password"
                    name="password"
                    value={providerData.password}
                    onChange={handleProviderChange}
                  />
                </Form.Group>

                <Button className='btn-orange btn mt-3 border-0' type="submit">
                  Login as Service Provider
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
