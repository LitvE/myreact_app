import React from 'react'

function Level (props){

    const {score} = props;
    return (
        <div>
            <p>You are on {score} level!</p>
        </div>
    )
}

export default Level;