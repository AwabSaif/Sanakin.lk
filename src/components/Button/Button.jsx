import React from 'react'
import './Button.css'
import classnames from "classnames"

export default function  Button({ children, className, size, variant}) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`

    const allClasses = classnames(sizeClass,variantClass, className)
    return (
        <button className={allClasses} >
            {children}
        </button>
    )

}
