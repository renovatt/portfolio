'use client'
import { Canvas } from '@react-three/fiber'
import { ReactNode, Suspense } from 'react'
import { Environment, OrbitControls, Center } from '@react-three/drei'

const CanvaContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Canvas camera={{ position: [1.8, 0, 4], fov: 1 }}>
      <OrbitControls enableZoom={false} rotateSpeed={5} />
      <Environment preset="warehouse" blur={0.6} />
      <directionalLight
        position={[-2, 5, 22]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight />
      <Suspense fallback={null}>
        <Center>{children}</Center>
      </Suspense>
    </Canvas>
  )
}

export default CanvaContainer
