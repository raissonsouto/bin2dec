import React, { useState , useRef , useEffect } from 'react'

export default function Underline(props) {

    const [underline, setUnderline] = useState({
        position: 'relative',
        left: 80,
        height: 3,
        width: 40,
        backgroundColor: '#08f',
        transform: 'translateY(-2px)'
    })

    const underlineRef = useRef(null)

    useEffect(() => {
        console.log(underlineRef.current.offsetWidth)
    }, [props.underline])

    return (
        <div style={underline} ref={underlineRef}></div>
    )
}