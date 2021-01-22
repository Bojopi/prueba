import React from "react";
import "../components/styles/welcome.css";

//arrow function
const Welcome = ({username}) => (
	<div className="container">
		<div className="Fitness-User-Info">
			<h1>Hello {username}!</h1>
			<p>Let's workout to get someone gains!</p>
		</div>
	</div>
)

//esto es un componente funcional
// function Welcome(props) {
// 	return (
// 		<div className="container">
// 			<div className="Fitness-User-Info">
// 				<h1>Hello {props.username}!</h1>
// 				<p>Let's workout to get someone gains!</p>
// 			</div>
// 		</div>
// 	)
// }

export default Welcome;
