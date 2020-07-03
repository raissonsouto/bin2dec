import React, { Component, createRef } from 'react'
import erase from './close.png'
import './Body.css'

export default class InputField extends Component {

    ref = createRef()

    textarea = createRef()

    componentDidUpdate() {
        this.props.getHeight(this.ref.current.offsetHeight)
    }

    componentDidMount() {
        this.textarea.current.focus()
    }
    
    render() {
        return (
            <div className='InputField'>
                <div className="fakeTextarea" ref={this.ref}>{
                    this.props.value.split('\n').map(line => {
                        if (line == "") {
                            return <br/>
                        }
                        return <p>{line}</p>
                    })
                }
                </div>
                <textarea className='textarea'
                value={this.props.value}
                onChange={this.props.setValue.bind(this)}
                ref={this.textarea}
                ></textarea>
                <img
                    onClick={this.props.erase}
                    alt='erase' src={erase} className="erase"/>
            </div>
        )
    }
}
