import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { height: 0 }
  }

  updateDimensions () {
    this.setState({ height: window.innerHeight })
  }

  componentDidUpdate() {
    return
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  render() {
    return (
      <div className="App">
      <header className='title'>bin<span style={{color: '#08f'}}>2</span>dec</header>
      <Main />
      <div className='help-a' style={{color: '#08f'}}>See a step by step</div>
    </div>
    )
  }
}

