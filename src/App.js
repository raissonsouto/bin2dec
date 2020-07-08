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

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { height: 250, sidebar: '-220px', grid: '0 1fr' }
  }

  render() {
    return (
      <div  ref={this.ref} className='App'>
        <Header toggle={this.toggleSideBar.bind(this)} />
        <div className='Abody' style={{gridTemplateColumns: this.state.grid}}>
          <SideBar toggle={this.state.sidebar}/>
          <div className='Router'>
          </div>
        </div>
      </div>
    )
  }
}

