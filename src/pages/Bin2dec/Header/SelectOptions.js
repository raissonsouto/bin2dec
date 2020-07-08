import React, { Component } from 'react'
import BaseButton from './SelectOption'
import Underline from './Underline'
import json from './numericBases.json'

export default class BaseOptions extends Component {

    state = {left: 0, width: 0}

    setUnderline(width,left) {
        if(this.state.left != left || this.state.width != width) {
            this.setState({left: left, width: width})
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

                    {json.numberBases.map((numberBase) => (

                        <BaseButton
                            active={this.props.value}
                            base={numberBase}
                            key={numberBase.key}
                            //action
                            setUnderline={this.setUnderline.bind(this)}
                            setBase={this.props.setBase}
                        />

                    ))}
                </ul>
                <Underline left={this.state.left} width={this.state.width} />
            </div>
        )
    }
}
