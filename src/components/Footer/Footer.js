import React from 'react'
import Instagram from '../../assets/images/instagram.png'

import { Container } from './styles'

const Footer = () => {
  return (
    <Container>
      <p>INFO@MILLZFORNERIA</p>
      <a target='_blank' href='https://www.instagram.com/millz.forneria/' >
        <img src={Instagram} alt='isntagram'/>
        <p>@millz.forneria</p>
      </a>
      <p>©2020 por Millz Forneria.</p>
    </Container>
  )
}

export default Footer
