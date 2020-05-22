import React, { Component, useEffect } from 'react'
import BaseOptions from './BaseOptions'
import Switch from './Switch'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {width: 40, pos: 50}

    }

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
                    changeBase={this.props.changeInputBase}
                    underline={this.state}
                />
                <Switch switchBase={this.props.switchBase}/>
                <BaseOptions
                    value={this.props.outputBase}
                    changeBase={this.props.changeOutputBase}
                    underline={this.state}
                />
            </div>
        )
    }
}
