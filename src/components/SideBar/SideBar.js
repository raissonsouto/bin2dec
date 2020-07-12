import React, { Component } from 'react'
import Button from './button'
import './SideBar.css'

export default class SideBar extends Component {

    constructor(props) {
        super(props)
        this.state = {display: 'none'}
    }

    desactive() {
        this.props.desactive()
        setTimeout( () => {this.setState({display: 'none'})},200)
    }

    componentDidUpdate() {
        if(this.props.active && this.state.display == 'none') {
            this.setState({display: 'block'})
        }
    }

    render() {
        return (
            <>
            <div
                className='shadow'
                onMouseDown={this.desactive.bind(this)}
                style={{backgroundColor: this.props.active? '#0005' : '#0000',
                    display: this.state.display}}>
            </div>
            <div className='SideBar' style={{left: this.props.active ? '0px' : '-220px'}}>

                <div className='header'>Related services</div>
                <Button path='/bin2dec' title='translate' desactive={this.props.desactive} />
                <Button path='/step-by-step' title='step by step' desactive={this.props.desactive} />
                <Button path='/bin2bin' title='bin2bin' desactive={this.props.desactive} />

                <div className='header'>Discover more about</div>
                <Button path='/binary' title='binary' desactive={this.props.desactive} />
                <Button path='/decimal' title='decimal' desactive={this.props.desactive} />
                <Button path='/hexadecimal' title='hexadecimal' desactive={this.props.desactive} />
                <Button path='/octal' title='octal' desactive={this.props.desactive} />

                <div className='header'>Other services</div>
                <Button path='/games4free' title='games4free' desactive={this.props.desactive} />
                <Button path='/darkness' title='darkness' desactive={this.props.desactive} />
                
                <div className='header'>About</div>
                <Button path='/contact' title='contact' desactive={this.props.desactive} />
                  
            </div>
            </>
        )
    }
}
