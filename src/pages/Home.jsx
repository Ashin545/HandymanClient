import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import electrician from '../assets/male-electrician-worker.jpg';
import plumberpic from '../assets/handsome-plumber.jpg';
import Cleaninglady from '../assets/cleaning-lady.jpg';
import { Link } from 'react-router-dom';
import review1 from '../assets/Review1.JPG';
import review2 from '../assets/Review2.JPG';
import review3 from '../assets/Review3.JPG';


const App = () => {
  return (
    <div>
     


     <section className="hero hero-overlay text-center ">
  <Container>
    <h1>Welcome to <span className="text-orange">HANDYMAN</span> Service Providers</h1>
    <h6>Find the best service providers for your needs</h6>
    <Link className='btn-orange btn mt-3' as={Link} to="/services">LET'S GET STARTED</Link>
  </Container>
</section>

       
      <section className="featured-services py-5">
        <Container>
          <h2 className="text-center ">Featured Services</h2>
          <h6 className='text-center mb-4'>Explore popular services offered</h6>
          <Row>
            <Col md={4} className="text-center">
              <Card>
                <Card.Body className='p-2'>
                <div className='text-center'>
                <Image src={electrician} fluid /></div>
                  <h5 className='mt-4'>Electrician Service</h5>
                  <p>Affordable rates</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card>
              
                <Card.Body className='p-2'>
                <div className='text-center'>
                  <Image src={plumberpic} fluid /></div>
                  <h5 className='mt-4'>Plumber Service</h5>
                  <p>24/7 availability</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card>
                <Card.Body>
                <div className='text-center'>
                  <Image src={Cleaninglady} fluid /></div>
                  <h5 className='mt-4'>Cleaner Service</h5>
                  <p>Eco-friendly cleaning</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews py-5 bg-orange">
        <Container>
          <h2 className="text-center mb-4">Customer Reviews</h2>
          <Row>
            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                <div className='text-center mb-4'>
                <Image src={review1} fluid roundedCircle style={{ width: '50%' }}/></div>
                  <p>"Testimonial as short quotes from people who are happy with the service and how it helped customers to stay connected."</p>
                  <h5>Valerie Gaston</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <div className="text-center mb-4">
                <Image src={review2} fluid roundedCircle style={{ width: '50%' }} /></div>
                  <p>"Testimonial as short quotes from people who are happy with the service and how it helped customers to stay connected."</p>
                  <h5>Anthony Bledel</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} >
              <Card className="testimonial-card">
                <Card.Body>
                  <div className='text-center mb-4'><Image src={review3} fluid roundedCircle style={{ width: '50%' }}/></div>
                
                  <p>"Testimonial as short quotes from people who are happy with the service and how it helped customers to stay connected."</p>
                  <h5>Jermaine Clifford</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='click-through'>
        <Container>
        <Row>
          <Col md={10}>
          <h2 className="mb-3">HandyMan's Service Providers</h2>
          <h6 className="mt-3">Connecting you with top service providers</h6>
          </Col>
          <Col md={2}>
          <Link className='btn-orange btn mt-3' as={Link} to="/services">LET'S GET STARTED</Link>
          </Col>
        </Row>
        </Container>
      </section>

     
    </div>
  );
};

export default App;