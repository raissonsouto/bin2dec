import React, { Component } from 'react'

export default class OutputField extends Component {

    getStyle = () => {
        return {
            width: '100%',
            height: '100%',
            padding: 15,
            //backgroundColor: '#1c1c1c',
            fontSize: 30,
            wordWrap: 'break-word',
            color: '#eee',
            //borderBottomRightRadius: 10
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.output}
            </div>
        )
    }
}
