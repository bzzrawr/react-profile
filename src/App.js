import React from 'react';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Skills from './components/layout/Skills'
import './App.css';
import SkillsDetail from './components/layout/SkillsDetail';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Skills/>
      <SkillsDetail/>
    </div>
  );
}

export default App;
