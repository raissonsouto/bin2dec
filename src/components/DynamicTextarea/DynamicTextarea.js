import React, { createRef, Component } from 'react'
import EraseImg from './erase.png'

export default class DynamicTextarea extends Component {

    fakeTextarea = createRef()

    textarea = createRef()

    render() {
        return (
            <div>
                <div className="fakeTextarea"></div>
                <textarea
                    className="dynamicTextarea"
                    value={this.props.value}
                    onChange={this.props.setValue.bind(this)}
                    ref={this.textarea}>     
                </textarea>
                <div className="EraseDiv" ><img src={EraseImg} alt='erase' /></div>
            </div>
        )
    }
}
