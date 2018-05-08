import React, { Component } from 'react';
import './App.css';
import SignoutNav from '../components/navigation/SignoutNav';
import Logo from '../components/logo/Logo';
import face from '../components/logo/logo.png';

class App extends Component {
  render() {
    return (
    	<div>
      		<SignoutNav />
      		
      	</div>
    );
  }
}

export default App;
