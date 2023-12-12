import { useEffect, useState } from 'react';

export const KeyboardButton = ({ setXPos, setYPos, setAnimacion, setDeltaMovement }) => {
    const [keysPressed, setKeysPressed] = useState({});

    useEffect(() => {
        const velocidad = 1; // Velocidad de movimiento

        const handleKeyDown = (event) => {
            // Actualizar el estado de la tecla presionada, para más de una tecla presionada
            setKeysPressed((prevKeys) => ({
                ...prevKeys,
                [event.key]: true,
            }));

            // Animaciones específicas al presionar una tecla
            if (event.key === '1') { setAnimacion(10) }
            if (event.key === '2') { setAnimacion(9) }
            if (event.key === '0') { setDeltaMovement([0, 0, 0]) }
        };

        const handleKeyUp = (event) => {
            // Actualizar el estado de la tecla liberada
            setKeysPressed((prevKeys) => ({
                ...prevKeys,
                [event.key]: false,
            }));
        };

        const calculateVelocity = () => {
            let deltaX = 0;
            let deltaY = 0;

            // Arriba y Derecha
            if ((keysPressed['ArrowUp'] || keysPressed['w']) && (keysPressed['ArrowRight'] || keysPressed['d'])) {
                deltaX = deltaX + velocidad;
                deltaY = deltaY - velocidad;
            }
            // Arriba y Izquierda
            if ((keysPressed['ArrowUp'] || keysPressed['w']) && (keysPressed['ArrowLeft'] || keysPressed['a'])) {
                deltaX = deltaX - velocidad;
                deltaY = deltaY - velocidad;
            }
            // Abajo y Derecha
            if ((keysPressed['ArrowDown'] || keysPressed['s']) && (keysPressed['ArrowRight'] || keysPressed['d'])) {
                deltaX = deltaX + velocidad;
                deltaY = deltaY + velocidad;
            }
            // Abajo y Izquierda
            if ((keysPressed['ArrowDown'] || keysPressed['s']) && (keysPressed['ArrowLeft'] || keysPressed['a'])) {
                deltaX = deltaX - velocidad;
                deltaY = deltaY + velocidad;
            }
            // Arriba
            if (keysPressed['ArrowUp'] || keysPressed['w']) {
                deltaY = deltaY - velocidad;
            }
            // Abajo
            if (keysPressed['ArrowDown'] || keysPressed['s']) {
                deltaY = deltaY + velocidad;
            }
            // Izquierda
            if (keysPressed['ArrowLeft'] || keysPressed['a']) {
                deltaX = deltaX - velocidad;
            }
            // Derecha
            if (keysPressed['ArrowRight'] || keysPressed['d']) {
                deltaX = deltaX - velocidad;
            }

            console.log(deltaX - " + " - deltaY)

            // Actualizar las posiciones de las teclas
            setXPos(deltaX);
            setYPos(deltaY);
        };

        // Agregar event listeners para el teclado
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // Calcular la velocidad y actualizar las posiciones en cada fotograma
        const animationFrameId = requestAnimationFrame(function update() {
            calculateVelocity();
            // requestAnimationFrame(update);
        });

        // Eliminar event listeners y cancelar la animación
        return () => {
            window.removeEventListener('keydown', handleKeyDown); // Se deja de escuchar la pulsación abajo
            window.removeEventListener('keyup', handleKeyUp); // Se deja de escuchar la pulsación arriba
            cancelAnimationFrame(animationFrameId); // Cancela la animación
        };
    }, [setXPos, setYPos, keysPressed]);
};
