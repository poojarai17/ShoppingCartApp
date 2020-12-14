import {Component} from 'react';
import './App.css';
import Items from './Items.js';
import Price from './Price.js';
class App extends Component{
 render(){
  return (
    <div class="page">
    <div class="wrapper">
      <div class="items-wrapper">
        <div class="itemsClass">
          <Items/>
        </div>
      </div>
      <div class="priceClass">
       <Price/>
      </div>
    </div>
  </div>
  );
  }
}

export default App;
