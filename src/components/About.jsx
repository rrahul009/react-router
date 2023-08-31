import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate=useNavigate()

  return (
    <div>
        <button onClick={()=>navigate(1)}>nextPage</button>
      <h1>About Us</h1>
      <p>Welcome to our About page! We're a dedicated team of developers striving to create amazing web applications.</p>
      
      <h2>Our Mission</h2>
      <p>Our mission is to provide innovative and user-friendly solutions that make a difference in people's lives.</p>
      
      <h2>Our Team</h2>
      <ul>
        <li>John Doe - Founder and CEO</li>
        <li>Jane Smith - Lead Developer</li>
        <li>Michael Johnson - Designer</li>
      </ul>
      
      <h2>What We Do</h2>
      <p>We specialize in developing modern web applications using the latest technologies and best practices. From design to implementation, we create solutions that deliver value to our clients and users.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to contact us at contact@example.com.</p>
    </div>
  );
}

export default About;
