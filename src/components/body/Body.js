import React, { Component } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'
import './body.css'

export default class Body extends Component {

    render() {
        return (
            <div className='body'>
                <InputField
                    onChange={this.props.onChange}
                    input={this.props.input}
                    erase={this.props.erase}
                />
                <OutputField output={this.props.output} />
            </div>
        )
    }
}