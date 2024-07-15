'use client'
import { gsap } from 'gsap'
import { Mesh } from 'three'
import { useThree } from '@react-three/fiber'
import { ReactNode, useLayoutEffect, useRef } from 'react'

const GSAPContainer = ({ children }: { children: ReactNode }) => {
  const { camera } = useThree()
  const gsapRef = useRef<Mesh>(null!)

  useLayoutEffect(() => {
    const entryTl = gsap.timeline({
      onComplete: () => {
        startLookingAnimations()
      },
    })

    entryTl.fromTo(
      camera.position,
      { x: 150, y: 900, z: 200 },
      {
        x: gsapRef.current.position.x,
        y: gsapRef.current.position.y,
        z: 200,
        ease: 'power1.inOut',
        duration: 2,
      },
    )

    const startLookingAnimations = () => {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      })

      // Look to the right
      tl.to(gsapRef.current.rotation, {
        y: Math.PI / 4,
        duration: 1.2,
        ease: 'power1.inOut',
      })

      // Look to the left
      tl.to(gsapRef.current.rotation, {
        y: -Math.PI / 4,
        duration: 0.5,
        ease: 'power1.inOut',
      })

      // Look up diagonally
      tl.to(gsapRef.current.rotation, {
        x: -Math.PI / 8,
        y: Math.PI / 8,
        duration: 1.5,
        ease: 'power1.inOut',
      })

      // Look down diagonally
      tl.to(gsapRef.current.rotation, {
        x: Math.PI / 8,
        y: -Math.PI / 8,
        duration: 0.5,
        ease: 'power1.inOut',
      })

      // Look up diagonally left
      tl.to(gsapRef.current.rotation, {
        x: -Math.PI / 8,
        y: -Math.PI / 8,
        duration: 0.5,
        ease: 'power1.inOut',
      })

      // Look down diagonally right
      tl.to(gsapRef.current.rotation, {
        x: Math.PI / 8,
        y: Math.PI / 8,
        duration: 0.5,
        ease: 'power1.inOut',
      })

      // zoom in
      tl.to(gsapRef.current.position, {
        z: 50,
        duration: 0.5,
        ease: 'power1.inOut',
      })

      // 360 spin and jump
      tl.to(gsapRef.current.rotation, {
        y: '+=' + 2 * Math.PI, // 360 degree spin
        duration: 0.5,
        ease: 'power1.inOut',
      })

      // Additional animation for the object
      gsap.to(gsapRef.current.position, {
        y: 10,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        duration: 2,
      })
    }

    return () => {
      entryTl.kill()
    }
  }, [camera.position])

  return (
    <mesh ref={gsapRef} scale={2}>
      {children}
    </mesh>
  )
}

export default GSAPContainer
