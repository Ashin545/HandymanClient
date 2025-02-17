import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ServiceProviderDashboard = () => {
  return (
    <Container className='section-padding'>
      <h2 className="mt-5">Service Provider Dashboard</h2>
      <Row>
        <Col md={6}>
          <Card className='mt-3'>
            <Card.Body>
              <Card.Title>My Appointments</Card.Title>
              <Card.Text>
                View and manage your upcoming appointments.
              </Card.Text>
              <Button className='btn-orange btn mt-3 border-0' href="/appointments">View Appointments</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceProviderDashboard;
