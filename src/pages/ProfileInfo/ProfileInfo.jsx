import './ProfileInfo.css'

const ProfileInfo = (props) => {
  return ( 
    <>
    <img src={props.profile.avatar} alt="user avatar" />
    <h2>{props.profile.name}</h2>
    <h4>({props.profile.username})</h4>
    </>
  )
}
export default ProfileInfo
