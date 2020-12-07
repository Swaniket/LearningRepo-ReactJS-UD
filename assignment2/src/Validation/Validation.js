import React from 'react'

const validation = (props) => {
    let validationMessage = (<p>Text too short</p>)

    if (props.textLength > 5) {
        validationMessage = (
            <p>Text long enough</p>
        )
    }

    return(
        <div>
            {validationMessage}
        </div>
    )
}

export default validation