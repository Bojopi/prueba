import React from "react"
import "../components/styles/welcome.css"

//esto es un componente funcional
function Welcome(props) {
    return (
        <div className = "container">
            <div className = "Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>Let's workout to get someone gains!</p>
            </div>
        </div>
    )
}

export default Welcome