import React, { createRef, RefObject } from 'react'
import './App.css'

import Landing from './components/landing/Landing'
import Start from './components/start/Start'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

interface ComponentRef {
  name: string,
  reference: RefObject<HTMLDivElement>
}

function App() {

  const componentRef: ComponentRef[] = [
    { 
      name: 'landing',
      reference: createRef<HTMLDivElement>()
    },
    {
      name: 'summary',
      reference: createRef<HTMLDivElement>()
    },
    {
      name: 'project',
      reference: createRef<HTMLDivElement>()
    },
    {
      name: 'contact',
      reference: createRef<HTMLDivElement>()
    }
  ]

  const scrollTo = (e: React.MouseEventHandler<HTMLButtonElement>, compName: string) => {
    const selectedComponent = componentRef.filter((component) => component.name === compName)
    if (selectedComponent[0].reference.current) {
      selectedComponent[0].reference.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    <div className="app">
      <Landing ref={componentRef[0].reference} onScroll={scrollTo} />
      <Start />
      <Summary ref={componentRef[1].reference} />
      <Project ref={componentRef[2].reference} />
      <Contact ref={componentRef[3].reference} />
    </div>
  );
}

export default App
