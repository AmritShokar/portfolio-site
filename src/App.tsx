import React, { useRef } from 'react'
import './App.css'

import Landing from './components/landing/Landing'
import Start from './components/start/Start'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

interface onClicks {
  
}

function App() {
  const compRef = useRef<HTMLDivElement>()

  const scrollTo = (e: React.MouseEventHandler<HTMLButtonElement>) => {

    console.log(e.name)

    if (compRef.current) {
      compRef.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    <div className="app">
      <Landing onScroll={scrollTo} />
      <Start />
      <Summary />
      <Project />
      <Contact getRef={compRef} />
    </div>
  );
}

export default App
