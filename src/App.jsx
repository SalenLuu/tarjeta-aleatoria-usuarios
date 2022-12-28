import './App.css'
import UserCard from './components/UserCard'
import { useEffect, useState } from 'react'
import users from './data/users.json'

function App() {

  // console.log(users)
  // const usersInfo = users.map((user, index)=> <UserCard userData={user}  key={`product-${index}`}/>)
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]
  const [color, setColor] = useState()
  const [user, setUser] = useState()
  const [previousUserIndex, setPreviousUserIndex] = useState()
  
  useEffect(() => {
    const userIndex = Math.floor(Math.random() * users.length)
    setPreviousUserIndex(userIndex)
    setUser(users[userIndex])
    setColor(colors[userIndex])
  });



  const handleClick = () => {
    let newUserIndex = Math.floor(Math.random() * users.length)
    
    while  (users.length > 1 && newUserIndex === previousUserIndex){
      newUserIndex = Math.floor(Math.random() * users.length)
    }
    setUser(users[newUserIndex])
    setPreviousUserIndex(newUserIndex)
    setColor(colors[newUserIndex])
    document.body.style.backgroundColor = color
    document.body.style.color = color
  }


  return (
    <div className="App">
      {
        user ? <UserCard userData={user} /> : "Loading"
      }
      <button onClick={handleClick} className="button"><img src={`./src/assets/flechas.png`} className="arrow"/></button>
    </div>
  )
}

export default App
