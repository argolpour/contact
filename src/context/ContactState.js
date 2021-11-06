import ContactContext from './contactContext';
import { GET_CONTACTS } from './Types';
import contactReducer from './contactReducer'
import { useReducer } from 'react';

const ContactState = ({children}) => {
    const initialState={
        contacts:[]
    }
    const [state, dispatch] = useReducer(contactReducer, initialState)
    const getContacts=async ()=>{
        fetch('http://localhost:5000/contacts')
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:GET_CONTACTS,payload:data})
        })
     }

     const createContact=async(firstname,lastname,email)=>{
            const response=await fetch ('http://localhost:5000/contacts/',{
            method:"POST",
            body:JSON.stringify({firstName:firstname,lastName:lastname,email:email}),
            headers:{
                "Content-type": "Application/json",
            },
        });
        return response
     }

     const DeleteContact=async (id)=>{
        await fetch(`http://localhost:5000/contacts/${id}`,{
        method:"DELETE",
          })
          getContacts()
          }
  
    return (
      <ContactContext.Provider value={{...state,getContacts,createContact,DeleteContact}}>
          {children}
      </ContactContext.Provider>
    )
}

export default ContactState
