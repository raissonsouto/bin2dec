import React, { Component } from 'react'
import SelectOptions from './SelectOptions'
import SelectOptionsMobile from './SelectOptionsMobile'
import Media from 'react-media'
import Switch from './Switch'
import './Header.css'

export default class Header extends Component {

    state = { inName: 'binary', outName: 'decimal' }

    setInput = (value, name) => {

        if(value == this.state.output) this.switchBase()
        else {
            this.setState({input: value, inName: name})
            sessionStorage.setItem('inputBase',value)
        } 
    }

    setOutput = (value, name) => {
        if(value == this.state.input) this.switchBase()
        else {
            this.setState({output: value, outName: name})
            sessionStorage.setItem('outputBase',value)
        }
    }

    switchBase = () => {
        this.setState({
            input: this.state.output,
            output: this.state.input,
            inName: this.state.outName,
            outName: this.state.inName
        })
        sessionStorage.setItem('inputBase',this.state.input)
        sessionStorage.setItem('outputBase',this.state.output)
    }

    componentDidMount() {
        this.setState({
            input: parseInt(sessionStorage.getItem('inputBase')),
            output: parseInt(sessionStorage.getItem('outputBase'))
        })
    }

    render() {
        return (
            <div className='Header'>
                <Media queries={{ small: { minWidth: 720 } }}>
                    {matches => matches.small ?
                    <SelectOptions setBase={this.setInput} value={this.state.input}/> :
                    <SelectOptionsMobile setBase={this.setInput} value={this.state.input} name={this.state.inName}/>}
                </Media>

                <Switch onClick={this.switchBase}/>

                <Media queries={{ small: { minWidth: 720 } }}>
                    {matches => matches.small ?
                    <SelectOptions setBase={this.setOutput} value={this.state.output}/> :
                    <SelectOptionsMobile setBase={this.setOutput} value={this.state.output} name={this.state.outName}/>}
                </Media>
            </div>
        )
    }
}
