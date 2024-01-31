import { userData } from "../../data/userData"
import './Users.css'
import UserCard from "../UserCard/UserCard"
import { useState } from "react"

// console.log(userData)

const Users = () => {
  //hook
  const [users,setUsers] = useState(userData)
  return (
    <>
      <h1>User List</h1>
      <div className="card-container">
        {/* map the userData to UserCard components here */}
        {users.map(user =>
          <UserCard key={user.id} />
          )}
      </div> 
    </>
  )
}

export default Users;