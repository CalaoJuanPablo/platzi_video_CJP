import React from 'react';
import profilePic from '../../../images/profile-pic.jpg';
import './Perfil.css';

const Perfil = (props) =>
  <div className="Perfil">
    <div className="image-container">
      <img src={profilePic} alt="Juan Pablo Calao" />
    </div>
    <h1>Juan Pablo Calao</h1>
    <h2>Desarrollador Frontend</h2>
    <p>
      Soy un desarrollador frontend amante del código limpio, que siempre busca entender cómo funcionan todas las herramientas que utilizo, con el objetivo de construir aplicaciones estables. Utilizo <a href="https://reactjs.org" target="_blank">ReactJS</a> como herramienta de desarrollo, acompañado de otras librerías que brindan soluciones específicas, como <a href="https://redux.js.org/" target="_blank">Redux</a>, <a href="https://reacttraining.com/react-router/" target="_blank">React Router</a>, <a href="https://redux-form.com" target="_blank">Redux Form</a>, <a href="https://material-ui.com" target="_blank">Material-UI</a>, entre otras.
    </p>
    <p>
      Adicionalmente trabajo en analítica de datos utilizando <a href="https://www.rstudio.com/" target="_blank">R</a> y todo lo que el <a href="https://www.tidyverse.org/" target="_blank">Tidyverse</a> tiene para ofrecer.
    </p>
    <p>
      Soy alguien apasionado por aprender nuevas cosas constantemente. Actualmente estoy aprendiendo <a href="http://flutter.io" target="_blank">Flutter</a>.
    </p>
  </div>

  export default Perfil;