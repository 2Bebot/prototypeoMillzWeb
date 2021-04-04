import React, { useEffect } from 'react'
import VideoPizza from '../../assets/videos/video_pizza.mov'

import { Container, VideoContainer, Video, ChatContainer } from './styles'

const Banner = () => {

  const myLandbot = (
      `<script SameSite="None; Secure" src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"></script>
      <div id="myLandbot" style="width: 100%; height: 90vh"></div>
      <script>
        var myLandbot = new Landbot.Container({
          container: '#myLandbot',
          configUrl: 'https://chats.landbot.io/v3/H-870810-22Y5NRT0T4NCKOO1/index.json',
        });
      </script>`
    )

  return (
    <Container>
      <VideoContainer>
        <Video autoPlay autobuffer loop muted >
          <source src={VideoPizza} />
        </Video>
      </VideoContainer>
      <ChatContainer>
        {/* <h2>Pizzas Millz</h2>
        <p>As pizzas Millz são feitas de forma artesanal com os melhores e mais frescos ingredientes.

Sua massa é preparada com farinha italiana OO, fermentação de 48h.
As pizzas são assadas em forno a lenha a 480ºC por 90 segundos.</p> */}
        <iframe srcDoc={myLandbot} title='myLandbot'/>
      </ChatContainer>
    </Container>
  )
}

export default Banner
