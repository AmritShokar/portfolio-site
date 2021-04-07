import React from 'react'
import './App.css'

import Landing from './components/landing/Landing'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Landing />
      <Summary />
      <Project />
      <Contact />
    </div>
  );
}

export default App
