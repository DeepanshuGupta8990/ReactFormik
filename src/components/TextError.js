import React from 'react'
import { styled } from 'styled-components'

export default function TextError(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
    color: red;
    font-size: 20px;
`