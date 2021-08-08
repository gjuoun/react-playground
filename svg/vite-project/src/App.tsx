import React, { useState } from 'react'
import logo from './logo.svg'
import {ReactComponent as Icon} from './icon.svg'
import styled from "@emotion/styled"
import {css} from '@emotion/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>hey</p>
      <Icon width="10em" height="10em" css={css`
        *{
          fill: yellow
        }
      `}/>
      <StyledIcon/>
    </div>
  )
}

export default App



const StyledIcon = styled(Icon)`
  *{
    fill: red
  }
`