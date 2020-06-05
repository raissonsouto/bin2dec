import React, { Component , createRef} from 'react'
import Close from './close.png'
import './body.css'
import TextareaAutosize from 'react-textarea-autosize'

export default class InputField extends Component {

    ref = createRef()

    onChange(e) {
        this.props.onChange( e.target.value, this.ref.current.offsetHeight)
    }

    componentDidMount() {
        this.ref.current.focus()
    }

    render() {

        //placeholder='Put a number and let me trnaslate for you'
        //minRows='4'
        return (
            <div className='inputField'>
                <TextareaAutosize
                    ref={this.ref}
                    className='textarea'
                    value={this.props.input}
                    onChange={this.onChange.bind(this)}
                />
                <div onClick={this.props.erase} className={this.props.input != '' ? 'erase' : 'notErase'}>
                    <img className='img' src={Close} alt='erase' />
                </div>
            </div>
        )
    }
}
