import React, { Component } from 'react'
import Body from './Body/Body'
import './Main.css'
import Header from './Header/Header'

export default class Main extends Component {

    state = {
        input: sessionStorage.getItem('inputBase'),
        output: sessionStorage.getItem('outputBase')
    }
    
    setBases(input, output) {
        this.setState({
            input: input,
            output: output
        })
    }

    render() {
        return (
            <div className='Main'>
                <Header setBases={this.setBases.bind(this)} />
                <Body input={sessionStorage.getItem('inputBase')} output={sessionStorage.getItem('outputBase')}/>
            </div>
        )
    }
}