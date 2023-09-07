import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
// import { Environment, ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
// import ModelViewer from './components/ModelViewer.jsx'
// import ShrekViewer from './components/ShrekViewer.jsx'
import { MenuAnimations } from './components/MenuAnimations.js'
import { Experience } from './components/Experience.jsx'
import { SocketManager, socket } from './components/SocketManager.jsx'
import { JoystickButton } from './components/JoystickButton.js'

// DESCARGAR MODELOS DE https://drive.google.com/drive/folders/1654D1Dti8cekUzB5c5rpE4EMnRr2V9Ko?usp=sharing
// PONERLOS EN public/models/

console.log('ip:', process.env.REACT_APP_API_URL)
export default function App() {
  const [animacion, setAnimacion] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [deltaMovement, setDeltaMovement] = useState([0, 0, 0]);

  useEffect(() => {
    setDeltaMovement([xPos, 0, yPos])
    socket.emit("move", deltaMovement)
  }, [xPos, yPos])

  const handleNadaClick = () => {
    setAnimacion(0)
  };

  const handleBaile1Click = () => {
    setAnimacion(1)
  };

  const handleBaile2Click = () => {
    setAnimacion(2)
  };

  const handlePatadaClick = () => {
    setAnimacion(3)
  };

  const handleMuerteClick = () => {
    setAnimacion(4)
  };

  const handleTodoClick = () => {
    setAnimacion(5)
  };

  const handlePoseClick = () => {
    setAnimacion(6)
  };

  return (
    <>
      <SocketManager />
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>

        <Experience />

      </Canvas>
      {/* <MenuAnimations handleNadaClick={handleNadaClick} handleBaile1Click={handleBaile1Click} handleBaile2Click={handleBaile2Click} handlePatadaClick={handlePatadaClick} handleMuerteClick={handleMuerteClick} handleTodoClick={handleTodoClick} handlePoseClick={handlePoseClick} /> */}
      <JoystickButton setXPos={setXPos} setYPos={setYPos} />
    </>
  )
}
