import React from 'react';
import { Col, Container, Row,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Handyman_Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer py-3 bg-light text-center">
      <Container>
        <Row>
          <Col lg={3}>
          <Image src={logo} fluid className='footer-logo'/>
          </Col>
          <Col lg={3}><h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          </Col>
          <Col lg={3}><h5>Services</h5>
          
          <ul>
            <li><Link to="/services">Electrician</Link></li>
            <li><Link to="/services">Plumbing</Link></li>
            <li><Link to="/services">Carpentery</Link></li>
            <li><Link to="/services">Cleaning</Link></li>
          </ul>
          </Col>
          <Col lg={3}>
          <h5>Contact</h5><ul>
          <li><FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }}/>
        +91 9496456475
        
      </li>
      
          <li><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
          handyman@gmail.com
        
      </li>
      <li><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }}/>
          MNRA-184, Tripunithra, Ernakulam
        
      </li>
          </ul> </Col>
          
        </Row>
        <Row>
          <Col className='text-center'>
          <p className='mx-2'><span className='orange-clr'>Copyright 2025 © Hanyman. All Rights Reserved</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
