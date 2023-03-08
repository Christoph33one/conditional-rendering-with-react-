import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? 'Data loaded!': 'loading...'}</h1>
                {this.state.isLoggedIn ? 
                (<div>
                    <p>Welcome to the site! please follow the steps below</p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Subscripbe to our news letter</li>
                    </ol>
                </div> ) : (<p>Please sign in</p>)}
            </div>
        )
    }
}

export default ConditionalRenderingClass

// using a teriary condition 
// similar to the functional component
// but we use a state with a  class component, to compare what is rendered from true to false. 
// here the user will see either a list of instrucntions if isLoggedIn is true or if false, user will see Please dign in
// see video conditional rndering for more info!