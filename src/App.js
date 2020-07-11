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
import Bin2bin from './pages/Bin2bin/Bin2bin'
//import Binary from './components/about-bases/Binary'
//import Decimal from './components/about-bases/Decimal'
//import Hexadecimal from './components/about-bases/Hexadecimal'
//import Octal from './components/about-bases/Octal'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { height: 250, sidebar: false }
  }

  ref = createRef()

  toggleSideBar () {
    this.setState({sidebar: !this.state.sidebar})
  }

  desactive () {
    if (this.state.sidebar == true) {  
      this.setState({sidebar: false})
    }
  }

  updateDimensions () {
    this.setState({ height: this.ref.current.offsetHeight })
  }

  componentDidMount() {
    this.setState({ height: this.ref.current.offsetHeight })
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  render() {
    return (
      <Router>
        <div  ref={this.ref} className='App'>
          <Header toggle={this.toggleSideBar.bind(this)} />
          <div className='Abody'>
            <SideBar active={this.state.sidebar} desactive={this.desactive.bind(this)} />
            <div className='Router'>
                <Route exact path='/bin2dec' component={Bin2dec}/>
                <Route exact path='/bin2bin' component={Bin2bin}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

