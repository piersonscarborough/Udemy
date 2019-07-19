import React, {Component} from 'react'
import './App.css';
import CardSet from './CardSet'
import cards from './cards'
// import EventAndState from './EventAndState';
// import StatePractice from './StatePractice';
// import StateInAction from './StateInAction';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className='row'>
          <CardSet cards={cards}/>
        </div>
      </div>
    );
  }
}

export default App;
