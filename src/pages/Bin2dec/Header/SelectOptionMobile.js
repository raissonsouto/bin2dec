import React, { useState, useRef, useEffect ,createRef, Component} from 'react'
import './Header.css'

export default class BaseButton extends Component {

    constructor(props) {
        super(props)
        this.state = this.props.base
    }

    getStyle() {
        return {
            height: 50,
            color: this.state.active == false ? '#08f' : '#eee',
            display: this.props.open == false? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            width: '100%',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            khtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none', 
            userSelect: 'none',
        }
    }

    componentWillMount() {
        if (this.props.active == this.state.value) {
            this.setState({active: true})
        }
    }

    componentWillUpdate(nextProps) {

        //ex-active
        if (this.state.active && nextProps.active != this.state.value) {
            this.setState({active: false})

        //new active
        } else if (nextProps.active == this.state.value && !this.state.active) {
            this.setState({active: true})
        }
    }

    render() {
        return (
            <div
            style={this.getStyle()}
            onClick={this.props.setBase.bind(this, this.state.value, this.state.fullName)}
            >
            {this.state.fullName}
            </div>
        )
    }
}
