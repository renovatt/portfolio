'use client'
import { Canvas } from '@react-three/fiber'
import { ReactNode, Suspense } from 'react'
import GSAPContainer from './GSAP-container'
import { OrbitControls, Center } from '@react-three/drei'

const CanvaContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Canvas camera={{ position: [40, 20, 90], fov: 50 }}>
      <OrbitControls enableZoom={false} rotateSpeed={5} />
      <directionalLight
        position={[-45, 50, 22]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[10, 10, 10]} />
      <ambientLight />
      <Suspense fallback={null}>
        <GSAPContainer>
          <Center>{children}</Center>
        </GSAPContainer>
      </Suspense>
    </Canvas>
  )
}

export default CanvaContainer
