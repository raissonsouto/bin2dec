import React, { Component , createRef } from 'react'
import Main from './components/Main/Main.js'
import Header from './components/Header/Header.js'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { height: 250 }
  }

  getStyle() {
    return ({
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    })
  }

  ref = createRef()

  updateDimensions () {
    this.setState({ height: this.ref.current.offsetHeight })
  }

  componentDidMount() {
    this.setState({ height: this.ref.current.offsetHeight })
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  render() {
    return (
      <div  ref={this.ref} style={this.getStyle()}>
      <Header />
      <Main height={this.state.height} />
    </div>
    )
  }
}

