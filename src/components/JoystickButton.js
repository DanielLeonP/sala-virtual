import React, { useEffect } from 'react';

export const JoystickButton = ({ setXPos, setYPos }) => {
    useEffect(() => {
        let dragging = false; // Si se esta arrastrando o no
        const joystick = document.querySelector('.joystick'); // Contenedor del joystick
        const handle = document.getElementById('joystick-handle'); // Punto central del joystick
        
        // Coordenadas del centro del joystick
        const velocidadJoystick = 3; // Velocidad de a la que el joystick mueve al personaje
        const offsetJoystick = 1.6; // Cuanto salida es la que tiene el joystick de su contenedor
        const joystickCenterX = (joystick.offsetWidth / 2) + 20; // Centro horizontal del joystick
        const joystickCenterY = (joystick.offsetHeight / 2) + 20; // Centro vertical del joystick
        const joystickRadius = joystick.offsetWidth / offsetJoystick - handle.offsetWidth / offsetJoystick; // Radio del joystick
        
        // Se detecta que se ha dado click dentro del joystick
        handle.addEventListener('mousedown', () => {
            dragging = true; // Se está arrastrando
        });
        
        // Se detecta que se está moviendo el mouse
        document.addEventListener('mousemove', (event) => {
            if (dragging) {
                const offsetX = event.clientX - joystick.getBoundingClientRect().left; // Posición del mouse horizontal
                const offsetY = event.clientY - joystick.getBoundingClientRect().top; // Posición del mouse vertical
                const distance = Math.sqrt(
                    Math.pow(offsetX - joystickCenterX, 2) +
                    Math.pow(offsetY - joystickCenterY, 2)
                ); // Distancia que se tiene del centro a la posición del mouse
                
                // Si el mouse está dentro del círculo del joystick, actualiza las coordenadas
                if (distance <= joystickRadius) {
                    handle.style.left = `${offsetX - handle.offsetWidth / 2}px`; // Actualización del joystick y donde se encuentra en tiempo real renderizándose horizontalmente
                    handle.style.top = `${offsetY - handle.offsetHeight / 2}px`; // Actualización del joystick y donde se encuentra en tiempo real renderizándose verticalmente
                    setXPos(((offsetX - joystickCenterX) / joystickRadius) * velocidadJoystick); // Cálculo de la distancia del joystick en relación con el círculo multiplicado por la velocidad en horizontal
                    setYPos(((offsetY - joystickCenterY) / joystickRadius) * velocidadJoystick); // Cálculo de la distancia del joystick en relación con el círculo multiplicado por la velocidad en vertical
                } else {
                    // Si el mouse está fuera del círculo, calcula las coordenadas en el límite del círculo
                    const angle = Math.atan2(offsetY - joystickCenterY, offsetX - joystickCenterX); // Ángulo donde se encuentra al límite el joystick
                    const xOnCircle = joystickCenterX + joystickRadius * Math.cos(angle); // Distancia límite de la distancia que se tiene del mouse al centro del joystick en horizontal
                    const yOnCircle = joystickCenterY + joystickRadius * Math.sin(angle); // Distancia límite de la distancia que se tiene del mouse al centro del joystick en vertical
                    
                    handle.style.left = `${xOnCircle - handle.offsetWidth / 2}px`; // Actualización del joystick y donde se encuentra en tiempo real renderizándose horizontalmente
                    handle.style.top = `${yOnCircle - handle.offsetHeight / 2}px`; // Actualización del joystick y donde se encuentra en tiempo real renderizándose verticalmente
                    setXPos(((xOnCircle - joystickCenterX) / joystickRadius) * velocidadJoystick); // Cálculo de la distancia del joystick en relación con el círculo multiplicado por la velocidad en horizontal
                    setYPos(((yOnCircle - joystickCenterY) / joystickRadius)* velocidadJoystick); // Cálculo de la distancia del joystick en relación con el círculo multiplicado por la velocidad en vertical
                }
            }
        });

        // Se detecta que se dejo de dar click
        document.addEventListener('mouseup', () => {
            setXPos(0); // Se regresa la posición a 0
            setYPos(0); // Se regresa la posición a 0
            dragging = false; // Se deja de arrastrar
            handle.style.left = '50%'; // Se coloca el joystick en el centro horizontal
            handle.style.top = '50%'; // Se coloca el joystick en el centro vertical
        });
    }, [setXPos, setYPos])

    return (
        <div className="joystick">
            <div id="joystick-handle" className="handle"></div>
        </div>
    );
};
