import React, { Component } from 'react'

export default class Bin2bin extends Component {
    render() {
        return (
            <div>
                {sessionStorage.getItem('input')}
            </div>
        )
    }
}
