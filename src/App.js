import React, {Component} from "react";
import './App.css';
import { Button } from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component{
    constructor(props) {
      super(props);
      this.state={
        input:""
      };
    }

    addToInput = props =>{
      if(props==='x')
      {this.setState({
        input: this.state.input + '*'});}
      else if(props==='%')
        {this.setState({input: this.state.input + '/100'})}
      else if(props==='+/-')
        {this.setState({input: this.state.input + '*-1'})}
      else if(props==='⌫')
        {this.setState({input: this.state.input.slice(0, -1)})}
      else{this.setState({input: this.state.input + props})}
    }

    handleEqual =() =>{
      try {
      this.setState({input: math.evaluate(this.state.input)});
    }
    catch(error) {
     if (error.toString().startsWith("SyntaxError:") || error.message.startsWith("Undefined symbol")) 
      {console.log(`**\`SyntaxError:\`** \`\``);
       alert(`\`SyntaxError:\`** \``);}
    }
  }

    render() {
    return(
      <div className="app-wrapper bg-gray-900" >
        <div className="calc-wrapper shadow-2xl">
          <Input input={this.state.input}></Input>
          <div className="row">
            <ClearButton 
             handleClear={
              ()=> this.setState({input:""})
            }>A/C</ClearButton>
            <Button handleClick={this.addToInput}>+/-</Button>
            <Button handleClick={this.addToInput}>%</Button>
            <Button handleClick={this.addToInput}>⌫</Button>


          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
        </div>
      </div>
    );   
  }   
}

export default App;
