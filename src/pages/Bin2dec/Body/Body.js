import React, { Component } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'
import './Body.css'

export default class Body extends Component {

    constructor(props) {
        super(props)
        this.state= {
            input: sessionStorage.getItem('input'),
            output: sessionStorage.getItem('output'),
            pageHeight: 250,
            inputHeight: 0,
            outputHeight: 0
        }
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

    setPageHeight() {
        
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

    validInput(input) {

        let domain
    
        if(sessionStorage.getItem('inputBase') == 2) {
            domain = /^[01]+$/
    
        } else if(sessionStorage.getItem('inputBase') == 10) {
            domain = /^[0-9]+$/
    
        } else if(sessionStorage.getItem('inputBase') == 16) {
            domain = /^[0-9,A-F]+$/
    
        } else if (sessionStorage.getItem('inputBase') == 8) {
            domain = /^[0-7]+$/
    
        }
    
        return !domain.test(input)
    }

    translate(num) {
        return parseInt(num, sessionStorage.getItem('inputBase')).toString(parseInt(sessionStorage.getItem('outputBase'))).toUpperCase()
    }

    multipleLinesHandler(input) {

        let output = ''

        if(input != '') {

            input.split('\n').forEach(line => {
    
                if (line == '') {
                    output += '\n'
        
                } else if (this.validInput(line)) {
                    output += 'Ops, maybe you typed something wrong\n'
        
                } else {
                    output += this.translate(line)+'\n'
                }
            })
        }
    
        return output
    }

    erase() {
        this.setState({input: '', output: ''})
        sessionStorage.setItem('input', '')
        sessionStorage.setItem('output', '')
    }

    onChangeHandler(inputValue) {
        let input = inputValue.target.value.toUpperCase()
        let output = this.multipleLinesHandler(input)

        sessionStorage.setItem('input', input)
        sessionStorage.setItem('output', output)

        this.setState({input: input, output: output})
    }

    //react
    
    componentDidUpdate(prevProps) {
        
        if(prevProps.input != this.props.input && prevProps.output != this.props.output) {
            this.setState({input: this.state.output, output: this.state.input})
            sessionStorage.setItem('input', this.state.output)
            sessionStorage.setItem('output', this.state.input)

        } else if (prevProps.output != this.props.output) {

            let output = this.multipleLinesHandler(this.state.input)

            this.setState({output: output})
            sessionStorage.setItem('output', output)
        }
        this.setPageHeight()
    }
    
    render() {
        return (
            <div className='Body' style={{height: this.state.pageHeight}}>
                <InputField
                    value={this.state.input}
                    setValue={this.onChangeHandler.bind(this)}
                    getHeight={this.setInput.bind(this)}
                    erase={this.erase.bind(this)}
                />
                <OutputField
                    value={this.state.output}
                    getHeight={this.setOutput.bind(this)}
                    inputValue={this.state.input}
                />
            </div>
        )
    }
}
