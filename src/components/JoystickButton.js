import React, { useEffect } from 'react';

export const JoystickButton = ({ setXPos, setYPos }) => {
    useEffect(() => {
        let position = 0;
        let dragging = false;
        const joystick = document.querySelector('.joystick');
        const handle = document.getElementById('joystick-handle');
        
        handle.addEventListener('mousedown', () => {
            dragging = true;
        });
        
        document.addEventListener('mousemove', (event) => {
            if (dragging) {
                position = getJoystickPosition();
                setXPos(((position.x - 0.5) * 2));
                setYPos(((position.y - 0.5) * 2));
                const joystickRect = joystick.getBoundingClientRect();
                const offsetX = event.clientX - joystickRect.left;
                const offsetY = event.clientY - joystickRect.top;
                const maxX = joystickRect.width - handle.offsetWidth + 42.5;
                const maxY = joystickRect.height - handle.offsetHeight + 42.5;
                const normalizedX = Math.min(maxX, Math.max(0, offsetX));
                const normalizedY = Math.min(maxY, Math.max(0, offsetY));
                handle.style.left = `${normalizedX}px`;
                handle.style.top = `${normalizedY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            setXPos(0);
            setYPos(0);
            dragging = false;
            handle.style.left = '50%';
            handle.style.top = '50%';
        });

        function getJoystickPosition() {
            const joystickRect = joystick.getBoundingClientRect();
            const handleRect = handle.getBoundingClientRect();
            const positionX = (handleRect.left - joystickRect.left + handleRect.width / 2) / joystickRect.width;
            const positionY = (handleRect.top - joystickRect.top + handleRect.height / 2) / joystickRect.height;
            return { x: positionX, y: positionY };
        }
    }, [setXPos, setYPos])

    return (
        <div className="joystick">
            <div id="joystick-handle" className="handle"></div>
        </div>
    );
};

