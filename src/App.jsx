import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';  // Import Layout
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ServiceProviderDashboard from './pages/ServiceProviderDashboard';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          {/* Define child routes */}
          <Route index element={<Home />} />  {/* Default route */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="Client-Dashboard" element={<ClientDashboard />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="service-provider-dashboard" element={<ServiceProviderDashboard />} />
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="contact" element= {<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
