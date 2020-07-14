//react imports
import React, { Component , createRef } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//css
import './App.css'
//components
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
//pages
import Bin2dec from './pages/Bin2dec/Bin2dec'
import StepByStep from './pages/StepByStep/StepByStep'
import Bin2bin from './pages/Bin2bin/Bin2bin'
//import Binary from './components/about-bases/Binary'
//import Decimal from './components/about-bases/Decimal'
//import Hexadecimal from './components/about-bases/Hexadecimal'
//import Octal from './components/about-bases/Octal'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { sidebar: false }
  }

  componentDidMount() {
    sessionStorage.setItem('inputBase', 2)
    sessionStorage.setItem('outputBase', 10)
    sessionStorage.setItem('input', 2)
    sessionStorage.setItem('output', '')
  }

  toggleSideBar () {
    this.setState({sidebar: !this.state.sidebar})
  }

  desactive () {
    if (this.state.sidebar == true) {  
      this.setState({sidebar: false})
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header toggle={this.toggleSideBar.bind(this)} />
          <div className='Abody'>
            <SideBar active={this.state.sidebar} desactive={this.desactive.bind(this)} />
            <div className='Router'>
                <Route exact path='/bin2dec' component={Bin2dec}/>
                <Route exact path='/step-by-step' component={StepByStep}/>
                <Route exact path='/bin2bin' component={Bin2bin}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

