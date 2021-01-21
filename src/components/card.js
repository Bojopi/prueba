//primero se importa la librería de React
import React from "react";
import excercise1 from "../images/exercise.png";
import "../components/styles/card.css";

//creamos la clase de javascript
class Card extends React.Component {
  render() {
    return (
      <div className = "card mx-auto Fitness-Card">
        <div className = "card-body">
          <div className = "row center">
            <div className = "col-6">
              <img src={excercise1}  className = "float-right" />
            </div>
            <div className = "col-6 Fitness-Card-Info">
              <h1>Technique Guides</h1>
              <p>Learn amazing street workout and calisthenics</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
