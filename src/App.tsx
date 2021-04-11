import React, { createRef, RefObject, useRef, useState } from 'react'
import './App.css'

import Landing from './components/landing/Landing'
import Start from './components/start/Start'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import { setRef } from '@material-ui/core'

// export interface ComponentRef {
//   testRef: RefObject<HTMLDivElement>
// }

function App() {

  // const [compRef, setCompRef] = useState([])
  // const compRef = useRef<HTMLDivElement>()
  // let testingRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  // const testingRef: ComponentRef = {
  const testRef = createRef<HTMLDivElement>()
  // const testRef = RefObject<HTMLDivElement>()
  // }


  const scrollTo = (e: React.MouseEventHandler<HTMLButtonElement>, compName: string) => {

    console.log()

    if (testRef.current) {
      testRef.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  const setRef = (elementRef: HTMLDivElement) => {

  }

  return (
    <div className="app">
      <Landing onScroll={scrollTo} />
      <Start />
      <Summary />
      <Project />
      <Contact testingRef={testRef} />
    </div>
  );
}

export default App
