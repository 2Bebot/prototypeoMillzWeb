import React from 'react'
import VideoPizza from '../../assets/videos/video_pizza.mov'

import { Container, VideoContainer, Video, ChatContainer } from './styles'

const Banner = () => {
  return (
    <Container>
      <VideoContainer>
        <Video autoPlay autobuffer loop muted >
          <source src={VideoPizza} />
        </Video>
      </VideoContainer>
      <ChatContainer>
        <h2>Pizzas Millz</h2>
        <p>As pizzas Millz são feitas de forma artesanal com os melhores e mais frescos ingredientes.

Sua massa é preparada com farinha italiana OO, fermentação de 48h.
As pizzas são assadas em forno a lenha a 480ºC por 90 segundos.</p>
      </ChatContainer>
    </Container>
  )
}

export default Banner
