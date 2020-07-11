import React, { Component } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'
import './Body.css'

export default class Body extends Component {

    state = {
        input: '',
        output: '',
        pageHeight: 250,
        inputHeight: 0,
        outputHeight: 0
    }

    //height control

    setInput(height) {
        
        if (this.state.inputHeight != height) {
            this.setState({ inputHeight: height })
        }
    }

    setOutput(height) {

        if (this.state.outputHeight != height) {
            this.setState({ outputHeight: height })
        }
    }

    setpageHeight() {
        
        if (this.state.inputHeight != this.state.pageHeight &&
            this.state.inputHeight > 250 &&
            this.state.inputHeight >= this.state.outputHeight) {

            this.setState({pageHeight: this.state.inputHeight})

        } else if (this.state.outputHeight >= 250 &&
            this.state.outputHeight > this.state.inputHeight &&
            this.state.outputHeight != this.state.pageHeight) {
                
            this.setState({pageHeight: this.state.outputHeight})

        } else if (this.state.pageHeight > 250 &&
            this.state.pageHeight > this.state.inputHeight &&
            this.state.pageHeight > this.state.outputHeight) {

            this.setState({pageHeight: 250})

        }
    }

    //translate

    erase() {
        this.setState({input: '', output: ''})
    }

    validate(input) {

        let domain

        if(this.props.input == 2) {
            domain = /^[01]+$/

        } else if(this.props.input == 10) {
            domain = /^[0-9]+$/

        } else if(this.props.input == 16) {
            domain = /^[0-9A-F]+$/

        } else if (this.props.input == 8) {
            domain = /^[0-7]+$/

        }

        return !domain.test(input)
    }

    onChangeHandler(input) {
        let output =this.multipleLinesHandler(input.target.value)

        sessionStorage.setItem('input', input.target.value)

        this.setState({input: input.target.value, output: output})
    }

    multipleLinesHandler(input) {
        let output = ''
        
        input.split('\n').forEach(line => {

            if (line == '') {
                output += '\n'

            } else if (this.validate(line)) {
                output += 'Ops, maybe you typed something wrong\n'

            } else {
                output += this.translate(line)+'\n'
            }
        })

        return output
    }

    translate(value) {
        return parseInt(value,this.props.input).toString(this.props.output).toUpperCase()
    }

    //react
    
    componentDidUpdate(prevProps) {
        
        if(prevProps.input != this.props.input && prevProps.output != this.props.output) {
            this.setState({input: this.state.output, output: this.state.input})

        } else if (prevProps.output != this.props.output) {
            let output = this.multipleLinesHandler(this.state.input)

            this.setState({output: output})
        }
        this.setpageHeight()
    }
    
    render() {
        return (
            <div className='Body' style={{height: this.state.pageHeight}}>
                <InputField
                    value={this.state.input}
                    setValue={this.onChangeHandler.bind(this)}
                    getHeight={this.setInput.bind(this)}
                    erase={this.erase.bind(this)}
                    parseJSX={this.parseJSX}
                />
                <OutputField value={this.state.output} getHeight={this.setOutput.bind(this)} parseJSX={this.parseJSX}/>
            </div>
        )
    }
}
