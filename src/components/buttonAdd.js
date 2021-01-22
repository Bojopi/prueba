import React from 'react'
import './styles/buttonAdd.css'
import buttonImg from '../images/add.png'
import { Link } from 'react-router-dom'

const ButtonAdd = () => {
    <Link to = "/exercise/new">
        <img src = {buttonImg} className = " Fitness-Add" alt = "exercise"/>
    </Link>
}

export default ButtonAdd