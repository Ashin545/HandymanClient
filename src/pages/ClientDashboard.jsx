import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ClientDashboard = () => {
  return (
    <Container className="section-padding">
      <h2 className="mt-5">Client Dashboard</h2>
      <Row>
        <Col md={6}>
          <Card className='mt-3'>
            <Card.Body>
              <Card.Title>My Service Requests</Card.Title>
              <Card.Text>
                View and manage your service requests here.
              </Card.Text>
              <Button className='btn-orange btn mt-3 b-0' href="/service-requests">View Requests</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientDashboard;
