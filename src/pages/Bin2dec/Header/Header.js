import React, { Component } from 'react'
import SelectOptions from './SelectOptions'
import SelectOptionsMobile from './SelectOptionsMobile'
import Media from 'react-media'
import Switch from './Switch'
import './Header.css'

export default class Header extends Component {

    state = {input: 2, output: 10, inName: 'binary', outName: 'decimal'}

    setInput = (value, name) => {
        value == this.state.output ? this.switchBase() : this.setState({input: value, inName: name})
    }

    setOutput = (value, name) => {
        value == this.state.input ? this.switchBase() : this.setState({output: value, outName: name})
    }

    switchBase = () => {
        this.setState({
            input: this.state.output,
            output: this.state.input,
            inName: this.state.outName,
            outName: this.state.inName
        })
    }

    componentDidUpdate() {
        this.props.setBase(this.state.input, this.state.output)
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
