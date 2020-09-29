import React from 'react'

const Error = (error) => {


    let returnMessage;

    if (error.error.message === 'Invalid broadcasterID')
        returnMessage = "The channel you are looking for does not exist!";

    return (
        <h2>
           {returnMessage} 
        </h2>
    )
}

export default Error
