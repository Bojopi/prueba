//primero se importa la librería de React
import React from "react";
import excercise1 from "../images/exercise.png";
import "../components/styles/card.css";
import circlesImg from "../images/circles.png"
import "./styles/card.css"


//creamos la clase de javascript
class Card extends React.Component {
  render() {
    const {title, description, img, leftColor, rightColor} = this.props
    return (
      <div className = "card mx-auto Fitness-Card"
        style = {{
          background: `url(${circlesImg}) no-repeat, linear-gradient(to right, ${leftColor}, ${rightColor})`
        }}
      >
        <div className = "card-body">
          <div className = "row center">
            <div className = "col-6">
              <img src={img}  className = "float-right" />
            </div>
            <div className = "col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
