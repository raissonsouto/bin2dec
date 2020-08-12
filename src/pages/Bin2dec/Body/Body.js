import React, { Component } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'
import validateInput from '../../../components/funcs/validateInput'
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

    erase() {
        this.setState({input: '', output: ''})
        sessionStorage.setItem('input', '')
        sessionStorage.setItem('output', '')
    }

    onChangeHandler(input) {
        let output =this.multipleLinesHandler(input.target.value)

        sessionStorage.setItem('input', input.target.value)
        sessionStorage.setItem('output', output)

        this.setState({input: input.target.value, output: output})
    }

    multipleLinesHandler(input) {
        let output = ''
        
        input.split('\n').forEach(line => {

            if (line == '') {
                output += '\n'

            } else if (validateInput(line)) {
                output += 'Ops, maybe you typed something wrong\n'

            } else {
                output += this.translate(line)+'\n'
            }
        })

        return output
    }

    translate(num) {
        return parseInt(num, parseInt(this.props.input).toString(parseInt(this.props.output)).toUpperCase())
    }

    //react

    componentDidMount() {
        this.setState({
            input: sessionStorage.getItem('input'),
            output: sessionStorage.getItem('output')
        })
    }
    
    componentDidUpdate(prevProps) {
        
        if(prevProps.input != this.props.input && prevProps.output != this.props.output) {
            console.log('c1')
            this.setState({input: this.state.output, output: this.state.input})

        } else if (prevProps.output != this.props.output) {
            console.log(this.props.output)

            let output = this.multipleLinesHandler(this.state.input)

            this.setState({output: output})
            console.log(output)
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
                <OutputField value={this.state.output} getHeight={this.setOutput.bind(this)} />
            </div>
        )
    }
}
