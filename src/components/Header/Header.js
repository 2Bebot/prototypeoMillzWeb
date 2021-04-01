import React from 'react'
import Instagram from '../../assets/images/instagram.png'

import { Container } from './styles'

const Header = () => {
  return (
    <Container>
      <div>
        <h2>Millz Forneria</h2>
        <a target='_blank' href='https://www.instagram.com/millz.forneria/' >
          <img src={Instagram} alt='isntagram'/>
        </a>
        {/* <h4>Log In</h4> */}
      </div>
    </Container>
  )
}

export default Header
