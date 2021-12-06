import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/Homepage.jsx';
import HomeHi from './components/Home/Homepagehi'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SmartBMI from './components/SmartBMI/SmartBMI';
import Chatbot from './components/Chatbot/Chatbot';
import DiseaesPred from './components/DiseasePred/DiseaseDetection';
import Doctor from './components/Doctor/Doctor';
import Details from './components/Doctor/Details';
function App() {
  return (
    <Router>
    <Chatbot />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/DiseaesPred' component={DiseaesPred} />
        <Route path='/hi' exact component={HomeHi} />
        <Route path='/Doctor' component={Doctor} />
        <Route path='/Details' component={Details} />
        <Route path='/health' component={SmartBMI} />
      </Switch>
    </Router>
  );
}

export default App;
