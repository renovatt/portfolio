'use client'
import { Suspense } from 'react'
import Loading3D from './Loading3D'
import { Canvas } from '@react-three/fiber'
import { CanvaContainerProps } from '@types'
import { Environment, OrbitControls } from '@react-three/drei'

const CanvaContainer = ({ children }: CanvaContainerProps) => {
  return (
    <Canvas camera={{ position: [2, 0, 5], fov: 45 }} shadows>
      <OrbitControls enableZoom={true} autoRotate rotateSpeed={5} />
      <Environment preset="city" blur={0.6} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <pointLight position={[0, 10, 10]} />
      <group position={[0, -1, 0]}>
        <Suspense fallback={<Loading3D />}>{children}</Suspense>
      </group>
    </Canvas>
  )
}

export default CanvaContainer
