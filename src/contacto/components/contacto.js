import React from 'react';
import profilePic from '../../../images/profile-pic.jpg';
import './Contacto.css';

const Contacto = (props) =>
  <div className="Contacto">
    <div className="image-container">
      <img src={profilePic} alt="Juan Pablo Calao" />
    </div>
    <h1>Juan Pablo Calao</h1>
    <h2>Desarrollador Frontend</h2>
    <div className="social-media">
      <a href="#" target="_blank">Github</a>
      <a href="#" target="_blank">Twitter</a>
      <a href="#" target="_blank">Instagram</a>
      <a href="#" target="_blank">Linkedin</a>
    </div>
    <div className="personal-website">
      <a href="https://calaojuanpablo.com" target="_blank">calaojuanpablo.com</a>
    </div>
  </div>

  export default Contacto