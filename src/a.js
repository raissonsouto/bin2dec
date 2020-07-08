//react imports
import React, { Component , createRef } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
//import Teste from './teste'
//import Test from './Test'
//css
import './App.css'
//components
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

export default class App extends Component {

render() {
  return (
    <div  ref={this.ref} className='App'>
      <Header />
      <Router>
        <Route exact path="/test" component={Test}/>
        <Route exact path="/teste" component={Teste}/>
        
        <Link to="/test" >1</Link>
        <Link to="/teste" >2</Link>
      </Router>
    </div>
  )
}
}

