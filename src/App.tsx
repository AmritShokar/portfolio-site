import React from 'react'
import './App.css'

import Landing from './components/landing/Landing'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'

function App() {
  return (
    <div className="App">
      <Landing />
      <Summary />
      <Project />
    </div>
  );
}

export default App
