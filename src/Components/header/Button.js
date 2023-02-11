import React from 'react'

const Button = (props) => {
    return (
        <>
            <button
                className='btn'
                style={{
                    backgroundColor: props.bg_color,
                    color: props.text_color
                }}
            >{props.title}</button>
        </>
    )
}

export default Button