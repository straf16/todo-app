import React from 'react'
import { Wrapper } from './cardlist.styles'

function Cardlist(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default Cardlist
