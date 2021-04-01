import React from 'react'
import MassaPizza from '../../assets/images/massa_pizza.jpg'
import Instagram from '../../assets/images/instagram.png'

import { Container, InfoContainer } from './styles'

const Contacts = () => {
  return (
    <Container>
      <InfoContainer>
        <h2>ENTRE EM CONTATO</h2>
        <div>
          <p>Avenida da Boa Esperança Lote 4 loja 2c</p>
          <p>Parque das Nações - Lisboa</p>
        </div>
        <p>info@millzforneria.com</p>
        <p>+351 927323567</p>
        <a target='_blank' href='https://www.instagram.com/millz.forneria/' >
          <img src={Instagram} alt='isntagram'/>
          <p>@millz.forneria</p>
        </a>
      </InfoContainer>
        <img src={MassaPizza} alt='contact-pizza'/>
    </Container>
  )
}

export default Contacts
