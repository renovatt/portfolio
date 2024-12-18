'use client'
import { useEffect, useRef } from 'react'
import { GLTFResult } from '~types/typing'
import { useGLTF, useAnimations } from '@react-three/drei'

const Mecha = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations }: GLTFResult = useGLTF(
    '/models/utility_robot.glb',
  )

  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    const firstAnimationName = names?.[0]
    const firstAnimationAction = actions?.[firstAnimationName]

    if (firstAnimationAction) {
      firstAnimationAction.reset().fadeIn(0.5).play()
      return () => {
        firstAnimationAction.fadeOut(0.5)
      }
    }
  }, [actions, names])

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Box001_mtl}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Box001_mtl}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/utility_robot.glb')

export default Mecha
