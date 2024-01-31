import './UserCard.css'

const UserCard = (props) => {
  return ( 
    <div className="user-card">
    <img src={props.user.avatar} alt="avatar" />
    <h2>{props.user.name}</h2>
    </div>
   );
}
 
export default UserCard;