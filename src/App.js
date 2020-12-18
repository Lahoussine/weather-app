import React from 'react';
import './App.css';
import Layout from './Layout'
import Home from './components/Home';
import Weather from './components/Weather';
import History from './components/History';
import About from './components/About';
import MyMap from './components/MyMap';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container">
        <main>
          <Layout></Layout>
          <Switch>
            <Route path="/weather-app" component={Home} exact />
            <Route path="/weather-app/weather" component={Weather} />
            <Route path="/weather-app/map" component={MyMap} />
            <Route path="/weather-app/history" component={History} />
            <Route path="/weather-app/about" component={About} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
