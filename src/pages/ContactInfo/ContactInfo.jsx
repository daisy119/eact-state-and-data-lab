import './ContactInfo.css'

const ContactInfo = (props) => {
  return ( 
    <>
    <h1>{props.contact.company.name}</h1>
    <h4 id="yellow">"{props.contact.company.catchPhrase}"</h4>
    <div className='email-phone'>
      <p>{props.contact.email}</p>
      <p>{props.contact.phone}</p>
      <p>{props.contact.website}</p>
    </div>
    <div className='address'>
      <p>{props.contact.address.street}</p>
      <p>{props.contact.address.suite}</p>
      <p>{props.contact.address.city}{'\u00A0'}{props.contact.address.zipcode}</p>
    </div>
    </>
  )
}
export default ContactInfo