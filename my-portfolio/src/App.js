import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Contact />  {/* Adding the Contact section */}
    </div>
  );
}

export default App;