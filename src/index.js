// const element = document.createElement('h1')
// element.innerText = 'Hello React'
// const container = document.getElementById('root')
// container.appendChild(element)
//https://www.iconfinder.com/icons/2754576/woman_female_avatar_icon


import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card'
import 'bootstrap/dist/css/bootstrap.css'

// const user = {
//     firstName: 'Bryana',
//     lastName: 'Ojopi',
//     avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'
// }

// function getName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function getGreeting(user) {
//     if(user) {
//         return <h1>Hello {getName(user)}</h1>
//     }
//     return <h1>Hello Stranger</h1>
// }

// const element = <h1>Hello {getName(user)}</h1>
//const avatar = <img src={user.avatar} />
// const element = (
//     <div>
//         {getGreeting(user)}
//         {avatar}
//     </div>
// )
// const element = (
//     <div>
//         {getGreeting(user)}
//         <img src = {user.avatar} />
//     </div>
// )



const container = document.getElementById('root')



//el DOM funciona de la siguiente manera:
//ReactDOM.render(__QUÉ__ , __DÓNDE__)
ReactDOM.render(<Card 
                    title = "Mi Titulo"
                    description = "Learn amazing street workout and calisthenics"
                    img = "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                    leftColor = "#A74CF2"
                    rightColor = "#617BFB"
                />, container)

/*al momento de importar y colocar un componente,
se le debe escribir dentro de </>*/