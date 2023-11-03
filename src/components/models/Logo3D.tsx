'use client'
import { gsap } from 'gsap'
import { useThree } from '@react-three/fiber'
import { useLayoutEffect, useRef } from 'react'
import { Center, Text3D, useTexture } from '@react-three/drei'

const Logo3D = () => {
  const tl = gsap.timeline()
  const { camera } = useThree()
  const meshRef = useRef(null)
  const texture = useTexture('/pink.jpg')
  const font =
    'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json'

  useLayoutEffect(() => {
    tl.fromTo(
      camera.position,
      {
        x: 20,
        y: 10,
        z: 10,
      },
      {
        x: 4.5,
        y: 0,
        z: 2,
      },
    )
  }, [camera.position, tl])

  return (
    <mesh ref={meshRef} castShadow receiveShadow scale={2}>
      <Center top position={[0, 0, 0]}>
        <Text3D font={font}>
          W
          <meshPhysicalMaterial
            map={texture}
            clearcoat={1}
            clearcoatRoughness={0}
            roughness={0}
            metalness={0.5}
          />
        </Text3D>
      </Center>
    </mesh>
  )
}

export default Logo3D
