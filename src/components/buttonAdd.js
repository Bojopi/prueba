import React from "react";
import "./styles/buttonAdd.css";
import buttonImg from "../images/add.png";
import {Link} from "react-router-dom";


//arrow function
const ButtonAdd = () => (
	<Link to="/exercise/new">
		<img src={buttonImg} className=" Fitness-Add" alt="exercise" />
	</Link>
)

//funcion normal
// function ButtonAdd() {
// 	return (
// 		<Link to="/exercise/new">
// 			<img src={buttonImg} className=" Fitness-Add" alt="exercise" />
// 		</Link>
// 	)
// }

export default ButtonAdd;
