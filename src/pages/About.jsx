import React from 'react';
import { Col, Container, Row, Card,Image } from 'react-bootstrap';
import logobanner from '../assets/Handyman_Logo.svg';
import ashinimg from '../assets/Ashin.jpg'
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'

function About() {
  return (
    <>
      <section className='py-md-5 py-2'>
        <Container>
          <Row>
            <Col xl={12}>
              <div className='text-center'>
                <h1>About Us</h1>
                <h6>Welcome to Handyman, your trusted partner for all your service needs!</h6>
              </div>
            </Col>
          </Row>
          <Row className='py-md-4 py-2'>
            <Col lg={6} className='py-5'>
              <p>At Handyman, we understand that finding reliable service
                providers can be a challenging and time-consuming task.
                That's why we've created a user-friendly platform where
                clients can easily connect with skilled professionals for
                various services such as plumbing, electrical work, cleaning,
                and carpentry.</p>

              <p>Our Mission: To simplify the process of finding and hiring
                trusted service providers, ensuring a seamless and stress-
                free experience for our clients.</p>

              <p>Our Vision: To become the leading platform for service
                management, known for our commitment to quality,
                reliability, and customer satisfaction.</p>
            </Col>
            <Col lg={6}>
              <div className='text-center'>
                <img src={logobanner} fluid  alt="Ashin" />
              </div>
            </Col>
          </Row>
          <Row className='What_We_Offer'>
            <Col>
              <h2>What We Offer:</h2>
              <ul>
                <li><strong>Diverse Services:</strong> Whether you need a plumber, electrician, cleaner, or carpenter, we've got you covered. Our platform hosts a wide range of service providers to meet all your needs.</li>
                <li><strong>Verified Professionals:</strong> We ensure that all our service providers undergo thorough verification and document checks, so you can have peace of mind knowing you're hiring trustworthy professionals.</li>
                <li><strong>Easy-to-Use Interface:</strong> Our website is designed to be intuitive and user-friendly, making it easy for both clients and service providers to navigate and use our services.</li>
                <li><strong>Real-Time Notifications:</strong> Stay updated with real-time notifications about job requests, quotes, and service provider responses.</li>
                <li><strong>Secure Transactions:</strong> We prioritize your security and privacy, ensuring that all transactions and communications are secure and confidential.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className=" py-5 bg-orange">
        <Container>
          <h2 className="text-center mb-4">Founder</h2>
          <Row>
            <Col md={4}>
              <div className='text-center'>
                <Image src={ashinimg} fluid style={{width:'50%'}}/>
              </div>
            </Col>
            <Col md={8}>
            <Card className="testimonial-card py-5">
                <Card.Body>
                
                  <p>Ashin Kurian, the visionary creator behind Handyman,
is a passionate and dedicated software developer
with a knack for solving real-world problems through
innovative technology solutions. With a background
in computer science and years of experience in web
development, Ashin has always been driven by the
desire to make everyday tasks easier and more
efficient for people. His deep understanding of user
needs and his commitment to quality have led to the
creation of Handyman, a platform designed to
seamlessly connect clients with skilled service
providers. Ashin's leadership, creativity, and
relentless pursuit of excellence continue to drive the
success and growth of Handyman.</p>
                  
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
              <h5 className="mt-3">Connecting you with top service providers</h5>
            </Col>
            <Col md={2}>
              <Link className='btn-orange btn mt-3' as={Link} to="/services">LET'S GET STARTED</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
