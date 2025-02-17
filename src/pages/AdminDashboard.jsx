import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container className="section-padding">
      <h2 className='mb-4'>Admin Dashboard</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Service Providers</Card.Title>
              <Card.Text>
                Approve or reject service providers from here.
              </Card.Text>
              <Button className='btn-orange btn mt-3 b-0' href="/manage-providers">Manage Providers</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Clients</Card.Title>
              <Card.Text>
                View and manage client accounts.
              </Card.Text>
              <Button className='btn-orange btn mt-3 b-0' href="/manage-clients">Manage Clients</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
