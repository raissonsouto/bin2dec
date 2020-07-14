import React, { Component } from 'react'
import SelectOptionMobile from './SelectOptionMobile'
import json from './numericBases.json'

export default class BaseOptions extends Component {

    state = {open: false}

    toggleSelectOptions = () => this.setState({open: !this.state.open})

    close = () => setTimeout(() => { if(this.state.open) this.setState({open: false}) },100)

    setBase(value, name) {
        this.props.setBase(value, name)
        this.close()
    }

    render() {

        return (
            <div>
                <button
                className='display'
                    onBlur={this.close.bind(this)}
                >
                    <div
                        onClick={this.toggleSelectOptions.bind(this)}
                        className='active'
                    >
                        {this.props.name}
                    </div>
                </button>
                <div className={this.state.open == true ? 'open' : 'close'}>
                    {json.numberBases.map((numberBase) => (

                        <SelectOptionMobile
                            active={this.props.value}
                            base={numberBase}
                            key={numberBase.key}
                            open={this.state.open}
                            //action
                            setBase={this.setBase.bind(this)}
                        />
                        ))}
                </div>
            </div>
        )
    }
}