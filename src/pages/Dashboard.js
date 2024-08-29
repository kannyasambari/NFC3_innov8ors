import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/AboutUs';
import Helpline from '../components/Contact';
import Community from '../components/Community';
import Events from '../components/Events';
import ListAPet from '../components/ListAPet';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Events />
      <Community />
      <Helpline/>
      <About />
    </div>
  );
};

export default App;



