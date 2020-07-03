import React, { Component } from 'react'
import SelectOptionMobile from './SelectOptionMobile'
import json from './numericBases.json'

export default class BaseOptions extends Component {

    state = {open: false}

    toggleSelectOptions() {
        if (!this.state.open) {
            this.setState({open: true})
        } else {
            this.setState({open: false})
        }
    }

    close() {
        if(this.state.open) {
            this.setState({open: false})
        }
    }

    setBase(value, name) {
        this.props.setBase(value, name)
        this.close()
    }

    render() {

        return (
            <button
                className={this.state.open == true ? 'open' : 'close'}
                onBlur={this.close.bind(this)}
            >
                <div
                    onClick={this.toggleSelectOptions.bind(this)}
                    className='active'
                >
                    {this.props.name}
                </div>
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
            </button>
        )
    }
}