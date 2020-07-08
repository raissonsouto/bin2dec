import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='hamburger' onClick={this.props.toggle}><div className='ham'></div></div>
                <div className='logo'><a href='/'>bin<span style={{color: '#08f'}}>2</span>dec</a></div>
            </header>
        )
    }
}
