import React, { createRef, RefObject } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import HttpClient from './lib/HttpClient'

import Landing from './components/landing/Landing'
import Start from './components/start/Start'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Video from './components/video/Video'

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
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Landing ref={componentRef[0].reference} onScroll={scrollTo} />
            <Start />
            <Summary ref={componentRef[1].reference} />
            <Project ref={componentRef[2].reference} />
            <Contact ref={componentRef[3].reference} />
          </Route>
          <Route path="/video">
            <Video />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App
