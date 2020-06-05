import React, { Component, createRef } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'
import './body.css'

export default class Body extends Component {

    state = {input: 0, output: 0}

    onChange(input, height) {
        this.props.onChange(input)
        this.setState({input: height})
    }

    outputHeight(height) {
        if(height != this.state.output) {
            this.setState({output: height})
        }
    }

    componentWillUpdate() {
        this.props.setHeight(this.state)
    }

    render() {
        return (
            <div className='body' style={{gridTemplateColumns: this.props.input != '' ? '50% 50%' : '100% 0%'}}>
                <InputField
                    onChange={this.onChange.bind(this)}
                    input={this.props.input}
                    erase={this.props.erase}
                />
                <OutputField output={this.props.output} setHeight={this.outputHeight.bind(this)} />
            </div>
        )
    }
}