import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Exercises from "../pages/exercises";
import ExerciseNew from "../pages/exerciseNew";
import NotFound from "../pages/notFound";

//aarrow function
const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/exercise" component={Exercises} />
			<Route exact path="/exercise/new" component={ExerciseNew} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

//funcion normal
// function App() {
// 	return (
// 		<BrowserRouter>
// 			<Switch>
// 				<Route exact path="/exercise" component={Exercises} />
// 				<Route exact path="/exercise/new" component={ExerciseNew} />
// 				<Route component={NotFound} />
// 			</Switch>
// 		</BrowserRouter>
// 	)
// }

export default App;
