import React from 'react'
import MapImage from '../../assets/images/print_map.png'
import MapResponsive from '../../assets/images/responsive_map.png'

import { Container, ResponsiveContainer } from './styles'

const Map = () => {
  return (
    <Container>
      <img src={MapImage} />
    </Container>
  )
}

export default Map
