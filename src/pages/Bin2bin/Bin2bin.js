import React, { Component } from 'react'

export default class Bin2bin extends Component {
    render() {
        return (
            <div style={{color: '#eee', fontSize: 20}}>
                inputBase {sessionStorage.getItem('inputBase')}<br/>
                outputBase {sessionStorage.getItem('outputBase')}<br/>
                input {sessionStorage.getItem('input')}<br/>
                output {sessionStorage.getItem('output')}
            </div>
        )
    }
}
