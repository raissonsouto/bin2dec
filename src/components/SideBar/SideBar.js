import React, { Component } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import './SideBar.css'

export default class SideBar extends Component {
    render() {
        return (
            <Router>
                <div className='SideBar' style={{left: this.props.toggle}}>

                    <div className='header'>Related services</div>
                    <Link className='button' to='/'>translate</Link>
                    <Link className='button' to='/step-by-step'>step by step</Link>
                    <Link className='button' to='/bin2bin'>bin2bin</Link>

                    <div className='header'>Discover more about</div>
                    <Link className='button' to='/binary'>binary</Link>
                    <Link className='button' to='/decimal'>decimal</Link>
                    <Link className='button' to='/hexadecimal'>hexadecimal</Link>
                    <Link className='button' to='/octal'>octal</Link>

                    <div className='header'>Other services</div>
                    <Link className='button' to='/bin2bin'>games4free</Link>
                    <Link className='button' to='/bin2bin'>darkness</Link>
                
                    <div className='header'>About</div>
                    <Link className='button' to='/bin2bin'>contact</Link>
                
                </div>
            </Router>
        )
    }
}
