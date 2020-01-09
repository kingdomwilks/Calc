import React from 'react';
import './index.css';
import Header from './Header';
import CalculatorContainer from './CalculatorContainer';

function App() {
  return (
    <div className="App">
        <Header header="The Calculator App"/>
        <CalculatorContainer/>
    </div>
  );
}

export default App;
