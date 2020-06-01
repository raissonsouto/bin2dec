import React, { Component } from 'react'
import BaseOptions from './BaseOptions'
import Switch from './Switch'

export default class Header extends Component {

    getStyle() {
        return {
            borderBottom: '1px solid #555',
            display: 'grid',
            gridTemplateColumns: '1fr 50px 1fr',
            position: 'relative'
        }
    }
    
    render() {
        return (
            <div style={this.getStyle()}>
                <BaseOptions
                    value={this.props.inputBase}
                    setBase={this.props.changeInputBase}
                />
                <Switch switchBase={this.props.switchBase}/>
                <BaseOptions
                    value={this.props.outputBase}
                    setBase={this.props.changeOutputBase}
                />
            </div>
        )
    }
}
