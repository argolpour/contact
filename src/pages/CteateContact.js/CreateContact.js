import {  useState,useContext } from "react";
import {useHistory} from "react-router-dom";
import contactContext from './../../context/contactContext';

const CreateContact = () => {
    const {getContacts,createContact}=useContext(contactContext)
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("")
    const submitHandler=(e)=>{
      e.preventDefault();
      if(name&&lastName,email){       
        createContact(name,lastName,email);
           history.push("/");
           getContacts();
         
      }
      }
        const DiscardHandler=()=>{
            history.push("/");
            getContacts()
        }
    return (
        
        <form className="wrapper" onSubmit={(e)=>{submitHandler(e)}}>
        <div className="home-header">
             <h4>Create Contact</h4>
            
         </div>
         <div className="form-group">
       <label htmlFor="exampleInputPassword1">First Name</label>
       <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter First Name.." value={name} onChange={(e)=>(setName(e.target.value))}/>
     </div>
     <div className="form-group">
       <label htmlFor="exampleInputPassword1">Last Name</label>
       <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Lirst Name.." value={lastName} onChange={(e)=>(setLastName(e.target.value))}/>
     </div>
     <div className="form-group ">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email.." value={email} onChange={(e)=>(setEmail(e.target.value))}/>
       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>
     
     <div className="d-flex justify-content-between">
     <button type="submit" className="btn btn-primary">Submit</button>
     <button type="button" className="btn btn-success ml-auto" onClick={()=>{DiscardHandler()}}>Cancel</button>
     </div>
   </form>
    )
}

export default CreateContact
