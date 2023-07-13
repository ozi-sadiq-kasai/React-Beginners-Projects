import Greeting from "./Greeting"
import Header from "./Header"

import React from 'react'
class App extends React.Component {
  render(){
   
   return(
    <>
   <Header/> 

    <Greeting/>
    </>
   )
  }
}

export default App
