import React from 'react'

function ConditionalRenderingFunctional(props) {
    return (
        <div>
            <h1>{props.connected ? 'Connected' : 'Not connected'}</h1>
        </div>
    )
}

export default ConditionalRenderingFunctional

// What is a ternary condition?
// A short hand version of an if statement 
// 1.In apps.js file - connect has a value of True
// I.e - <h1>{props.connected ? ‘Connected’ ? :  ‘Not connected’}</h1>
// 2.If props.connect is True, render the string ‘Connect’ :
// 3. else rendered the other string!