import React from 'react';
import './NotFound.css';

const handleForwardClick = props =>
  props.history.goForward();

  const handleBackClick = props =>
  props.history.goBack();

  const handleRandomClick = props => {
    const randomId = Math.round(Math.random() * (15 - 1) + 1)
    props.history.push(`/videos?id=${randomId}`, { id: randomId });
  }

const NotFound = props =>
  <div className="NotFound">
    <h1>Contenido no encontrado</h1>
    <button className="Button" onClick={() => handleForwardClick(props)}>
      Ir a la siguiente página 👉🏽
    </button>
    <button className="Button" onClick={() => handleBackClick(props)}>
      Ir a la ruta anterior 👈🏽
    </button>
    <button className="Button" onClick={() => handleRandomClick(props)}>
      Video random 🍀
    </button>
  </div>

export default NotFound;
