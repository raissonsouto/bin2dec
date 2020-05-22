import React, { Component } from 'react'
import SwitchImg from "./switch.png"

export default class Switch extends Component {

    getStyle = () => {
        return {
            width: 22,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            position: 'absolute',
            userSelect: 'none',
            cursor: 'pointer',
        }
    }

    render() {
        return (
            <div>
               <div>
                   <img onClick={this.props.switchBase} style={this.getStyle()} src={SwitchImg} alt='switch' />
               </div>
            </div>
        )
    }
}