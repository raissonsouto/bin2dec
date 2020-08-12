import React, { Component } from 'react'
import './StepByStep.css'
import DynamicTextarea from '../../components/DynamicTextarea/DynamicTextarea'
import Options from '../../components/ChooseBase/Options'
import validateInput from '../../components/funcs/validateInput'
import translate from '../../components/funcs/translate'

export default class Bin2bin extends Component {

    state = {
        inputBase: sessionStorage.getItem('inputBase'),
        outputBase: sessionStorage.getItem('outputBase')
    }

    setInput(value) {

        if(value == this.state.outputBase) this.switchBase()
        else {
            this.setState({inputBase: value})
            sessionStorage.setItem('inputBase',value)
        } 
    }

    setOutput(value) {
        if(value == this.state.inputBase) this.switchBase()
        else {
            this.setState({outputBase: value})
            sessionStorage.setItem('outputBase',value)
        }
    }

    switchBase = () => {
        sessionStorage.setItem('inputBase',this.state.outputBase)
        sessionStorage.setItem('outputBase',this.state.inputBase)
        this.setState({
            input: this.state.outputBase,
            output: this.state.inputBase,
        })
    }

    multipleLinesHandler(input) {
        let output = ''
        
        input.split('\n').forEach(line => {

            if (line == '') {
                output += '\n'

            } else if (validateInput(line)) {
                output += 'Ops, maybe you typed something wrong\n'

            } else {
                output += translate(line)+'\n'
            }
        })

        return output
    }

    onChangeHandler(input) {
        let output =this.multipleLinesHandler(input.target.value)

        sessionStorage.setItem('input', input.target.value)
        sessionStorage.setItem('output', output)

        this.setState({input: input.target.value, output: output})
    }

    componentDidMount() {
        this.setState({
            input: sessionStorage.getItem('input'),
            output: sessionStorage.getItem('output')
        })
    }
    
    componentDidUpdate(prevProps) {
        
        if(prevProps.input != this.props.input && prevProps.output != this.props.output) {
            this.setState({input: this.state.output, output: this.state.input})

        } else if (prevProps.output != this.props.output) {
            let output = this.multipleLinesHandler(this.state.input)

            this.setState({output: output})
        }
    }

    render() {
        return (
            <div className="StepByStep">
                <div>
                    <Options
                        value={this.state.inputBase}
                        setBase={this.setInput.bind(this)}
                    />
                    <div className="greyBox">
                        <DynamicTextarea />
                    </div>
                    <Options
                        value={this.state.outputBase}
                        setBase={this.setOutput.bind(this)}
                    />
                    <div className="greyBox">{sessionStorage.getItem('output')}</div>
                </div>
            </div>
        )
    }
}


//duvidas sobre react
// -como fazer o projeto rodar na maquina d eoutro coleguinha
//-como fazer um componente que coloca funçoes no componente mae 
