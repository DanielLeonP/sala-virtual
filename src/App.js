import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls, PerspectiveCamera, AxesHelper } from '@react-three/drei'
// import Car from './Car'
import ModelViewer from './models/ModelViewer'
import ShrekViewer from './models/ShrekViewer'
import { MenuAnimations } from './components/MenuAnimations'

// DESCARGAR MODELOS DE https://drive.google.com/drive/folders/1654D1Dti8cekUzB5c5rpE4EMnRr2V9Ko?usp=sharing
// PONERLOS EN public/models/

export default function App() {
  const [animacion, setAnimacion] = useState(0);

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
      <Canvas gl={{ toneMappingExposure: 0.7 }}>
          <Suspense fallback={null}>
              <Environment files="/skyBox2.hdr" ground={{ height: 32, radius: 130 }} />
              <spotLight angle={1} position={[-80, 200, -100]} intensity={1} />

              {/* <Car position={[-8, 0, -2]} scale={20} rotation-y={-Math.PI / 4} /> */}
              {/* <ModelViewer /> */}
              <ShrekViewer animacion={animacion} />

              <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />
          <PerspectiveCamera makeDefault position={[-30, 50, 120]} fov={35} />
      </Canvas>
      <MenuAnimations handleNadaClick={handleNadaClick} handleBaile1Click={handleBaile1Click} handleBaile2Click={handleBaile2Click} handlePatadaClick={handlePatadaClick} handleMuerteClick={handleMuerteClick} handleTodoClick={handleTodoClick} handlePoseClick={handlePoseClick} />
    </>
  )
}
