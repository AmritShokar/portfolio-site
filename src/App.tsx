import { useRef } from 'react'
import './App.css'

import Landing from './components/landing/Landing'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

interface onClicks {
  
}

function App() {
  const compRef = useRef<HTMLDivElement>()

  const scrollTo = () => {
    if (compRef.current) {
      compRef.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    <div className="app">
      <Landing onScroll={scrollTo} />
      <Summary />
      <Project />
      <Contact test={compRef} />
    </div>
  );
}

export default App
