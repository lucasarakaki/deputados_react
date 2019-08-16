import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho/cabeca.js';
import Deputados from './components/Deputados/deputa.js';

class App extends Component
{


  render()
  {
    return(
      <div className="App">
        <Cabecalho />
        <Deputados />
      </div>
    );
  }
}

export default App;
