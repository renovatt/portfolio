'use client'
import React from 'react'
import Logo3D from './Logo3D'
import Container3D from './Container3D'
import CanvaContainer from './CanvaContainer'

const LogoModel = () => {
  return (
    <Container3D>
      <CanvaContainer>
        <Logo3D />
      </CanvaContainer>
    </Container3D>
  )
}

export default LogoModel