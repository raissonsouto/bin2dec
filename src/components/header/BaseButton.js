import React, { Component } from 'react'

export default class BaseButton extends Component {

    getStyle() {
        return {
            height: 50,
            display: 'inline-block',
            color: this.props.base.active ? '#08f' : '#eee',
            padding: '15px 0px',
            cursor: 'pointer',
            WebkitTouchCallout: 'none', /* iOS Safari */
            WebkitUserSelect: 'none', /* Safari */
            khtmlUserSelect: 'none', /* Konqueror HTML */
            MozUserSelect: 'none', /* Old versions of Firefox */
            msUserSelect: 'none', /* Internet Explorer/Edge */
            userSelect: 'none', 
        }
    }

    render() {
        return (
            <li 
            style={this.getStyle()}
            onClick={this.props.changeBase.bind(this, this.props.base.value)}
            >
                {window.innerWidth > 1150 ? this.props.base.fullName : this.props.base.shortName}
            </li>
        )
    }
}