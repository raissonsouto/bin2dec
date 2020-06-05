import React, { Component } from 'react'
import './Main.css'
import Header from './header/Header'
import Body from './body/Body'

export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '', output: '', inputBase: 2, outputBase: 10, height: 0}
    }


    //header

    switchBase = () => {
        let aux = this.state.inputBase
        this.setState({inputBase: this.state.outputBase})
        this.setState({outputBase: aux})

        let auxd = this.state.output
        this.setState({output: this.state.value})
        this.setState({value: auxd})
    }

    setInputBase = (value) => {
        value == this.state.outputBase ? this.switchBase() : this.setState({inputBase: value})
    }

    setOutputBase = (value) => {
        value == this.state.inputBase ? this.switchBase() : this.setState({outputBase: value})
    }

    //body

    translate = (input) => {
        this.setState({value: input.toUpperCase()})
        let output = parseInt(input,this.state.inputBase).toString(this.state.outputBase).toUpperCase()
        if(output == 'NAN') {
            output = ''
        }
        this.setState({output: output})
    }

    erase = () => {
        this.setState({value: ''})
        this.setState({output: ''})
    }

    setHeight(height) {

        if (height.input >= height.output &&
            height.input + 90 != this.state.height) {
            
            this.setState({height: height.input + 90})

        } else if (height.output > height.input &&
            height.output + 120 != this.state.height) {

            this.setState({height: height.output + 120})

        }
    }

    //render

    render() {
        return (
            <div className='Main' style={{height: this.state.height}}>
                <Header
                //states
                    inputBase={this.state.inputBase}
                    outputBase={this.state.outputBase}
                    //actions
                    changeInputBase={this.setInputBase}
                    changeOutputBase={this.setOutputBase}
                    switchBase={this.switchBase}
                />
                <Body
                    //actions
                    onChange={this.translate}
                    erase={this.erase}
                    setHeight={this.setHeight.bind(this)}
                    //states
                    input={this.state.value}
                    output={this.state.output}
                />
            </div>
        )
    }
}
