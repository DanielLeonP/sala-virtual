import React from 'react';
import './GlobalStyle.css'

export const MenuAnimations = ({ handleNadaClick, handleBaile1Click, handleBaile2Click, handlePatadaClick, handleMuerteClick, handleTodoClick, handlePoseClick }) => {
  return (
    <div className='panel'>
      <button onClick={handleNadaClick} className='boton'>Nada</button>
      <button onClick={handleBaile1Click} className='boton'>Salto</button>
      <button onClick={handlePatadaClick} className='boton'>Patada Mortal</button>
      <button onClick={handleMuerteClick} className='boton'>Muerte Extrema</button>
      <button onClick={handleBaile2Click} className='boton'>Un buen Cumbion</button>
      <button onClick={handlePoseClick} className='boton'>Normal Pose</button>
      <button onClick={handleTodoClick} className='boton'>Todos</button>
    </div>
  );
};
