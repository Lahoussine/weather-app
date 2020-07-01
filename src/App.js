import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout'
import Home from './components/Home';
import Weather from './components/Weather';
import History from './components/History';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
            <Route path="/weather-app/history" component={History} />
            <Route path="/weather-app/about" component={About} />
          </Switch>



        </main>
      </div>


    </div>
  );
}

export default App;
