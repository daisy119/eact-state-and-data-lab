import './UserCard.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ContactInfo from '../ContactInfo/ContactInfo';
import { useState } from 'react';

const UserCard = (props) => {
  const [displayProfileInfo, setShowContact] = useState(true)

  function handleContactDisplay() {
    setShowContact(!displayProfileInfo)
  }
  return ( 
    <div className="user-card">
      {displayProfileInfo ? <ProfileInfo profile={props.user} /> : <ContactInfo contact={props.user} />}

      {displayProfileInfo ? '':<button id='website'>Visit Website</button> }

      <button id="contact-btn" onClick={handleContactDisplay}>{displayProfileInfo? "Show " : "Hide"}Contact Info</button>
    </div>
   );
}
 
export default UserCard;