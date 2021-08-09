import React, { useState } from 'react'
import logo from './logo.svg'
import { ReactComponent as Icon } from './icon.svg'
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import FancyButtonLog from './logProps'

function App() {
  const [count, setCount] = useState(0)
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef<HTMLButtonElement>();


  return (
    <div className="App">
      <button
        onClick={() => {
          const attr = ref.current?.attributes
          console.log(attr);

        }}
      >Hey</button>
      <FancyButton ref={ref}>
        Click me!
      </FancyButton>
      <FancyButtonLog />
    </div>
  )
}

export default App


const FancyButton = React.forwardRef<HTMLButtonElement,
  { children: React.ReactNode, onClick?: React.MouseEventHandler<HTMLButtonElement> }>
  ((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
      {props.children}
    </button>
  ));

