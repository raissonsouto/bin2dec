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
            cursor: 'pointer'
        }
    }

    render() {
        return (
            <>
               <button onClick={this.props.onClick} style={{border: 'none', backgroundColor: '#2220', height: 50}}>
                   <img style={this.getStyle()} src={SwitchImg} alt='switch' />
               </button>
            </>
        )
    }
}