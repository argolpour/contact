import { useContext,useEffect } from "react";
import Contact from "./Contact";
import contactContext from './../../context/contactContext';

const Contacts = () => {
        const {getContacts,contacts} =useContext(contactContext)
        
         useEffect(() => {
            getContacts()
         }, [])
                  return (
        <ul className="contacts-wrapper">
           
            {contacts?.map(contact=><Contact contact={contact} key={contact.id}/>)}
        </ul>
    )
}

export default Contacts
