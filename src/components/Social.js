import React from 'react'

export default function Social(props) {
    return (
        <a href={props.url}>
            <img src={props.src} alt={props.src} />
        </a>
    )
}
