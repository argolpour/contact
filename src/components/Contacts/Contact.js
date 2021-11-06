import { Link } from 'react-router-dom'
import nopic from './nopic.jpg'
import contactContext from './../../context/contactContext';
import { useContext } from 'react';


const Contact = ({contact}) => {
   const {getContacts,DeleteContact}=useContext(contactContext);

    return (
       
        <li className="contact-box">
         <div className="left-side">
         <img src={nopic} alt="contact.first_name"></img>
            <div className="contact-info">
            <span>{`${contact.firstName} ${contact.lastName}` }</span>
            <a href={contact.email}>{contact.email}</a>
            </div>
         </div>
            <div className="right-side">
            <Link to={`/update-contact/${contact.id}`}> <i className="far fa-edit"></i></Link>
         <i className="far fa-trash-alt" onClick={()=>{DeleteContact(contact.id)}} ></i>
            
             </div>
        </li>
    )
}

export default Contact
