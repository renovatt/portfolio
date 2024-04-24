/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import { gsap } from 'gsap'
import { useThree } from '@react-three/fiber'
import { ReactNode, useLayoutEffect, useRef } from 'react'
import { Mesh } from 'three'

const GSAPContainer = ({ children }: { children: ReactNode }) => {
  const tl = gsap.timeline()
  const { camera } = useThree()
  const gsapRef = useRef<Mesh>(null!)

  useLayoutEffect(() => {
    tl.fromTo(
      camera.position,
      {
        x: 150,
        y: 800,
        z: 200,
      },
      {
        x: 120,
        y: 90,
        z: 200,
        ease: 'power1.inOut',
        duration: 2,
      },
    )

    gsap.to(gsapRef.current.position, {
      y: 10,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      duration: 2,
    })
  }, [camera.position, tl])

  return (
    <mesh ref={gsapRef} scale={2}>
      {children}
    </mesh>
  )
}

export default GSAPContainer
