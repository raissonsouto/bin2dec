import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
//mudar dps
import './Main.css'

export default class Main extends Component {

    state = {input: 2, output: 10}

    setBase(input, output) {
        if(this.state.input != input || this.state.output != output) {
            this.setState({input: input, output: output})
        }
    }

    render() {
        return (
            <div className='Main'>
            <Header setBase={this.setBase.bind(this)}/>
            <Body input={this.state.input} output={this.state.output} height={this.props.height} />
        </div>
        )
    }
}