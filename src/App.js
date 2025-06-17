import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Breakdown from './components/Breakdown';
import Donate from './components/Donate';
import EightActs from './components/EightActs';
import Declaration from './components/Declaration';
import Latest from './components/Latest';
import Newsletter from './components/Newsletter';
import Signatories from './components/Signatories';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Breakdown />
      <Donate />
      <EightActs />
      <Declaration />
      <Latest />
      <Newsletter />
      <Signatories />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;