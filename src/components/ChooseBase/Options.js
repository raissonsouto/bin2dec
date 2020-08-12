import React, { Component } from 'react'
import BaseButton from './Option'
import json from './numericBases.json'

export default class Options extends Component {

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
                            setBase={this.props.setBase}
                            setUnderline={() => console.log('fon')}
                        />

                    ))}
                </ul>
            </div>
        )
    }
}
