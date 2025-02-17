import React from 'react'
import { Col, Container, Row ,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import plumber from '../assets/Plumber-sevice-pg.jpg';
import electrician from '../assets/electrician-services.jpg';
import Cleanerservice from '../assets/Cleaner-service.jpg';
import carpenter from '../assets/carpenter.jpg'


function Services() {
  return (
    <>
    <section className='Services-header hero-overlay '>
      <Container>
        <Row>
          <Col>
          <h1>Services</h1>
          <h6>At Handyman, we take pride in offering a wide range of high-quality services to meet all your household and commercial needs. Whether you're facing a leaky faucet, an electrical issue, or need a deep cleaning, our platform connects you with skilled professionals who can get the job done efficiently and reliably. Explore our services below:</h6>
          <div className='text-center'>
          <Link className='btn-orange btn mt-3' as={Link} to="/services">LET'S GET STARTED</Link>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section  className='bg-orange section-padding'>
    <Container>
        <Row>
          <Col lg={6}>
          <h2>Plumbers</h2>
          <p>From fixing minor leaks to installing new
plumbing systems, our licensed
plumbers are equipped to handle all
your plumbing needs. We ensure quick,
reliable, and affordable service to keep
your plumbing in top shape.

</p>
          
          </Col>
          <Col lg={6}>
          <div className='text-center'>
            <Image src={plumber} className="service-img" fluid/>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='section-padding'>
    <Container>
        <Row>
        <Col lg={6}>
          <div className='text-center'>
            <Image src={electrician} className="service-img" fluid/>
          </div>
          </Col>
          <Col lg={6}>
          <h2>Electricians</h2>
          <p>Our certified electricians are here to
tackle any electrical issues you may
encounter. Whether you need wiring,
repairs, or installations, we've got you
covered with safe and professional
solutions.

</p>
          
          </Col>
          
        </Row>
      </Container>
    </section>
    <section className='bg-orange section-padding'>
    <Container>
        <Row>
          <Col lg={6}>
          <h2>Cleaners</h2>
          <p>A clean home is a happy home. Our professional cleaners offer comprehensive cleaning services, including regular housekeeping, deep cleaning, and specialized cleaning for offices and commercial spaces.

</p>
          
          </Col>
          <Col lg={6}>
          <div className='text-center'>
            <Image src={Cleanerservice} className="service-img" fluid/>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='section-padding'>
    <Container>
        <Row>
         
          <Col lg={6}>
          <div className='text-center'>
            <Image src={carpenter} className="service-img" fluid/>
          </div>
          </Col>
          <Col lg={6}>
          <h2>Carpenter</h2>
          <p>A clean home is a happy home. Our professional cleaners offer comprehensive cleaning services, including regular housekeeping, deep cleaning, and specialized cleaning for offices and commercial spaces.
</p>
          
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
    
    </>
  )
}

export default Services