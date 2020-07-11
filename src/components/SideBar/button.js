import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SideBar.css'

export default class button extends Component {

    render() {
        return (
            <Link className='button' onClick={this.props.desactive} to={this.props.path}>{this.props.title}</Link>
        )
    }
}
