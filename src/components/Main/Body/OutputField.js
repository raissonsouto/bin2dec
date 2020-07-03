import React, { Component, createRef } from 'react'
import './Body.css'

export default class OutputField extends Component {

    constructor(props) {
        super(props)
        this.state = {bg: this.props.value == '' ? '#1c1c1c' : '#222'}
    }

    ref = createRef()

    componentDidUpdate() {
        this.props.getHeight(this.ref.current.offsetHeight)
    }
    
    render() {
        return (
            <div className="output" style={{backgroundColor: this.state.bg}}>
                <div className='OutputField' ref={this.ref} >
                    {this.props.value.split('\n').map(line => {
                        if (line == "") {
                            return <br/>
                        }
                        return <p>{line}</p>
                    })}
                </div>
            </div>
        )
    }
}
