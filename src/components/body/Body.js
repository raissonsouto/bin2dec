import React, { Component } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'

export default class Body extends Component {

    getStyle () {
        return {
            display: 'grid',
            gridTemplateColumns: '50% 50%',
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
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