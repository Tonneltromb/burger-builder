import React, { Component } from 'react';
import Aux from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Aux>
          <BurgerBuilder/>
        </Aux>
      </div>
    );
  }
}

export default App;
