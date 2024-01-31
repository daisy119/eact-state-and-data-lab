import './UserCard.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ContactInfo from '../ContactInfo/ContactInfo';

const UserCard = (props) => {
  return ( 
    <div className="user-card">
      <ProfileInfo profile={props.user} />
      <ContactInfo contact={props.user} />
      
    
    </div>
   );
}
 
export default UserCard;