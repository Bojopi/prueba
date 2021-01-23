import React from 'react'
import ExerciseForm from '../components/exerciseForm'
import Card from '../components/card'

class ExerciseNew extends React.Component {
  state = {
    form: {
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: ''
    }
  }

  handleChange = e => {
    // let partialState = e => {
    //     partialState[e.target.name] = e.target.value
    //     this.setState(partialState)
    // }

    //sustituído con Babel
    this.setState({
      form: {
        // con este destructuring le estamos diciendo que mantenga
        // todo lo que ya tenía guardado, y escriba una key nueva
        // si es que no existe, y la reescriba si es que sí
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm">
            <Card {...this.state.form}/>
        </div>
        <div className="col-sm">
          <ExerciseForm onChange={this.handleChange} form={this.state.form} />
        </div>
      </div>
    )
  }
}

export default ExerciseNew
