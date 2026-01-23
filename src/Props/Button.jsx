import React from 'react'

const Button = ({label , test}) => {
 return (
    <>
    <button onClick={test}>{label}</button>
    </>
 )
}

export default Button
