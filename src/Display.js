import React from 'react';

const Display = (props) => {
    const string = props.operations.join('')
    return (
        <div className="calculator-value">
            {string}
        </div>

    )
}

export default Display;