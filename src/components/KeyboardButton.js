import { useEffect } from 'react';

export const KeyboardButton = ({ setXPos, setYPos, setAnimacion }) => {
    useEffect(() => {
        // Si se presiona una tecla
        const handleKeyDown = (event) => {
            let velocidad = 1.5; // Velocidad de movimiento
            let deltaX = 0; // Posición en horizontal
            let deltaY = 0; // Posición en vertical

            // if ((event.key === 'ArrowUp' && event.key === 'ArrowLeft') || (event.key === 'w' && event.key === 'a')) {
            //     deltaY = deltaY - velocidad;
            //     deltaX = deltaX - velocidad;
            // }
            // if ((event.key === 'ArrowUp' && event.key === 'ArrowRight') || (event.key === 'w' && event.key === 'd')) {
            //     deltaY = deltaY - velocidad;
            //     deltaX = deltaX + velocidad;
            // }
            // if ((event.key === 'ArrowDown' && event.key === 'ArrowLeft') || (event.key === 's' && event.key === 'a')) {
            //     deltaY = deltaY + velocidad;
            //     deltaX = deltaX - velocidad;
            // }
            // if ((event.key === 'ArrowDown' && event.key === 'ArrowRight') || (event.key === 's' && event.key === 'd')) {
            //     deltaY = deltaY + velocidad;
            //     deltaX = deltaX + velocidad;
            // }
            // Arriba
            if (event.key === 'ArrowUp' || event.key === 'w') {
                deltaY = deltaY - velocidad;
            }
            // Abajo
            if (event.key === 'ArrowDown' || event.key === 's') {
                deltaY = deltaY + velocidad;
            }
            // Izquierda
            if (event.key === 'ArrowLeft' || event.key === 'a') {
                deltaX = deltaX - velocidad;
            }
            // Derecha
            if (event.key === 'ArrowRight' || event.key === 'd') {
                deltaX = deltaX + velocidad;
            }

            // Animaciones específicas al presionar una tecla
            if (event.key === '1') { setAnimacion(10) }
            if (event.key === '2') { setAnimacion(9)}

            setXPos(deltaX);
            setYPos(deltaY);
        };

        // Cuando la tecla se deja de presionar
        const handleKeyUp = (event) => {
            // Detener el movimiento cuando se suelta una tecla
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') {
                setXPos(0);
                setYPos(0);
            }
        };

        // Agregar event listeners para el teclado
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // Eliminar event listeners al desmontar el componente
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [setXPos, setYPos]);
};
