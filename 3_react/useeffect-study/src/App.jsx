import Everytime from './component/Everytime'
import './App.css'
import Once from './component/Once'
import WithState from './component/WithState'
import WithInterval from './component/WithInterval'
import { useState, useEffect } from "react";
import WithIntervalCleanUp from './component/WithIntervalCleanUp'
import TitleCounter from './component/Counter'
import LoginForm from './component/LoginForm'
import SharedCounter from './component/SharedCounter'

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <>
      {/* <Everytime />
      <Once />
      <WithState />
      {<TitleCounter />} 
      */}

      {/* <LoginForm /> */}
      <SharedCounter />
    </>
  )
}

export default App
