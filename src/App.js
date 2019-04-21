import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Counters from './Components/counters';



class App extends Component {
  state = {
    counters: [{
        id: 0,
        value: 4
      },
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      }
    ]
  }
  constructor(props){
    super(props);
    console.log("App-Constructor",this.props);
  }

  delete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });

  }
  reset = () => {

    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });

  }
  increment = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index]={...counter}
    counters[index].value++;
    this.setState({
      counters
    });
    // console.log(this.state.counters[index])

  }
  decrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({
      counters
    });
    // console.log(this.state.counters[index]);

  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
        
        <Counters
          counters={this.state.counters}
          onReset={this.reset} 
          onDelete={this.delete}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          
        />
        </main>
      </React.Fragment>

    );
  }
}

export default App;
