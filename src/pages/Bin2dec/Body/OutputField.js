import React, { Component, createRef } from 'react'
import './Body.css'

export default class OutputField extends Component {

    ref = createRef()

    componentDidUpdate() {
        this.props.getHeight(this.ref.current.offsetHeight)
    }
    
    render() {
        return (
            <div className="output" style={{ display: this.props.value != '' ? 'block' : 'none'}}>
                <div className='OutputField' ref={this.ref} >
                    {this.props.value.split('\n').map(line => {
                        if (line == "") {
                            return <br/>
                        }
                        return <p className='wordBreak'>{line}</p>
                    })}
                </div>
            </div>
        )
    }
}
