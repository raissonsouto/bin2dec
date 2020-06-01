import React, { Component } from 'react'
import BaseButton from './BaseButton'
import Underline from './Underline'
import data from './bases.json'

export default class BaseOptions extends Component {

    constructor (props) {
        super(props)
        this.state = {left: 0, width: 0}
    }

    setUnderline(data) {
        if(this.state.left != data.left || this.state.width != data.width) {
            this.setState({left: data.left})
            this.setState({width: data.width})
        }
    }

    render() {

        return (
            <div>
                <ul style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>

                    {data.numberBases.map((numberBase) => (

                        <BaseButton
                            setBase={this.props.setBase}
                            active={this.props.value}
                            base={numberBase}
                            key={numberBase.key}
                            setUnderline={this.setUnderline.bind(this)}
                        />

                    ))}
                </ul>
                <Underline left={this.state.left} width={this.state.width} />
            </div>
        )
    }
}
