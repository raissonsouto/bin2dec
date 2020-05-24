import React, { Component } from 'react'
import BaseButton from './BaseButton'
import Underline from './Underline'

export default class BaseOptions extends Component {

    getStyle() {
        
        return {
            display: 'flex',
            justifyContent: 'space-evenly',
        }
    }

    ok(val) {
        console.log('teste')
    }

    render() {

        return (
            <div>
                <ul style={this.getStyle()}>
                    <BaseButton 
                    
                        changeBase={this.props.changeBase} 
                    
                        base={{
                            fullName: 'binary',
                            shortName: 'bin',
                            value: 2,
                            active: this.props.value == 2 ? true : false
                        }}

                        info={this.ok}
                    />
                    <BaseButton
                        changeBase={this.props.changeBase}
                        
                        base={{
                            fullName: 'decimal',
                            shortName: 'dec',
                            value: 10,
                            active: this.props.value == 10 ? true : false
                        }}

                        info={this.ok}
                    />
                    <BaseButton
                        changeBase={this.props.changeBase}
                        
                        base={{
                            fullName: 'hexadecimal',
                            shortName: 'hex',
                            value: 16,
                            active: this.props.value == 16 ? true : false
                        }}

                        info={this.ok}
                    />
                    <BaseButton
                        changeBase={this.props.changeBase}
                        
                        base={{
                            fullName: 'octal',
                            shortName: 'oct',
                            value: 8,
                            active: this.props.value == 8 ? true : false
                        }}

                        info={this.ok}
                    />
                </ul>
                <Underline underline={this.props.underline} />
            </div>
        )
    }
}
