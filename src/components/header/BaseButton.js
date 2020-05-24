import React, { useState, useRef, useEffect } from 'react'
import Media from 'react-media'

export default function BaseButton(props) {

    const buttoon = useRef(null)

    const [state, setState] = useState({width: 0, left: 0, value: 8})

    useEffect(() => {
        setState({width: buttoon.current.offsetWidth})
        setState({left: buttoon.current.offsetLeft})
        setState({left: props.base.value})
    }, [])

    const getStyle = {
        height: 50,
        display: 'inline-block',
        color: props.base.active ? '#08f' : '#eee',
        padding: '15px 0px',
        cursor: 'pointer',
        WebkitTouchCallout: 'none', // iOS Safari 
        WebkitUserSelect: 'none', // Safari 
        khtmlUserSelect: 'none', // Konqueror HTML 
        MozUserSelect: 'none', // Old versions of Firefox 
        msUserSelect: 'none', // Internet Explorer/Edge 
        userSelect: 'none', 
    }

    return (
        <li
        style={getStyle}
        ref={buttoon}
        onClick={props.changeBase.bind(state, props.base.value)}
        >
            <Media queries={{ small: { minWidth: 1150 } }}>
                {matches => matches.small ? props.base.fullName : props.base.shortName}
            </Media>
        </li>
    )
}
