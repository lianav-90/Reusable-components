import React from 'react';
import {Input} from './Components/Input/input';
import {Card} from './Components/Card/card'
import './App.css';

function App() {
  return (
    <div className="App">
        <Input 
            onChange = {() => {console.log("Fill in")}}
            type = "text"
            inputStyle = "RED"
            inputSize = "SMALL" 
            placeholder = "Fill in"
        />
        <Card cardStyle = "YELLOW" cardSize = "SMALL">
          <h5>React.js</h5>
          <p>React.js is a popular Javascript front-end framework</p>
        </Card>
    </div>
  );
}

export default App;
