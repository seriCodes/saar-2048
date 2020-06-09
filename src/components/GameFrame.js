import * as React from "react"
import { Frame } from "framer"
import { OuterGrid } from "./OuterGrid"


const makeMove=()=>{
  console.log("object")
}

export function GameFrame() {


  document.onkeydown = function() {
    console.log("onkeydown GameFrame ")
  
  }
  
  return (
    <Frame size={300}  center tabIndex="0" onClick={makeMove} onkeydown={makeMove}>
      <OuterGrid></OuterGrid>
    </Frame>
  )
}

