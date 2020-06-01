import React, { Component } from 'react'
import './body.css'
import Copy from './copy.png'
import Help from './help.png'
import Share from './share.png'

export default class OutputField extends Component {

    getStyle = () => {
        return {
            width: '100%',
            height: '100%',
            padding: 15,
            backgroundColor: '#1c1c1c',
            fontSize: 30,
            color: '#eee',
            borderBottomRightRadius: 10,
            wordBreak: 'break-all',
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.output}
                <div className='outputImgs'>
                <img onClick={() => {alert('teste')}}className='help' src={Help} alt='help' />
                <img onClick={() => {alert('teste')}}className='copy' src={Copy} alt='copy' />
                <img onClick={() => {alert('teste')}}className='share' src={Share} alt='share' />
                </div>
            </div>
        )
    }
}
