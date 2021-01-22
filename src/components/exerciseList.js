import React from "react";
import Card from './card'

//este componente se encarga solo de iterar los cards que estan en la pagina
function ExerciseList(props) {
	return (
		<div>
			{props.exercises.map((exercise) => {
				return (
					<Card
						title={exercise.title}
						description={exercise.description}
						img={exercise.img}
						leftColor={exercise.leftColor}
						rightColor={exercise.rightColor}
					/>
				);
			})}
		</div>
	);
}

export default ExerciseList;
