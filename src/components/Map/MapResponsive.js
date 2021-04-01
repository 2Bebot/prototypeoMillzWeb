import React from 'react'
import MapImage from '../../assets/images/responsive_map.png'

import { ResponsiveContainer } from './styles'


const MapResponsive = () => {
  return (
    <ResponsiveContainer>
      <img src={MapImage} alt='map'/>
    </ResponsiveContainer>
  )
}

export default MapResponsive
