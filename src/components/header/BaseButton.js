import React, { useState, useRef, useEffect ,createRef, Component} from 'react'
import Media from 'react-media'

export default class BaseButton extends Component {

    constructor(props) {
        super(props)
        this.state = this.props.base
    }

    getStyle() {
        return {
            height: 50,
            display: 'inline-block',
            color: this.state.active ? '#08f' : '#eee',
            padding: '15px 0px',
            cursor: 'pointer',
            transition: '0.3s',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            khtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none', 
            userSelect: 'none',
        }
    }

    ref = createRef()

    componentWillMount() {

        if (this.props.active == this.state.value) {
            this.setState({active: true})
        }
    }

    componentDidMount() {
        if (this.state.active) {
            this.props.setUnderline({
                width: this.ref.current.offsetWidth,
                left: this.ref.current.offsetLeft
            })
        }
    }

    componentWillUpdate(nextProps) {

        //ex-active
        if (this.state.active && nextProps.active != this.state.value) {
            this.setState({active: false})

        //new active
        } else if (nextProps.active == this.state.value && !this.state.active) {
            this.setState({active: true})
            this.props.setUnderline({
                width: this.ref.current.offsetWidth,
                left: this.ref.current.offsetLeft
            })
        }
        //resize active
        else if (nextProps.active == this.state.value) {
            this.props.setUnderline({
                width: this.ref.current.offsetWidth,
                left: this.ref.current.offsetLeft
            })
        }
    }

    render() {
        return (
            <li
            style={this.getStyle()}
            ref={this.ref}
            onClick={this.props.setBase.bind(this, this.state.value)}

            >
                <Media queries={{ small: { minWidth: 1150 } }}>
                    {matches => matches.small ? this.state.fullName : this.state.shortName}
                </Media>
            </li>
        )
    }
}
