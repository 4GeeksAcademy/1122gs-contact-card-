import React, { useState, useEffect, useContext, } from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

function AddContact () {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    // const handleChange = (e) => {
    //     setContact({ ...contact, [e.target.id]: e.target.value });
  //  };

     const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        await actions.addContact(contact);
        await actions.getContacts();
        navigate("/")
      } catch (error){
        console.log('Error adding contact', error)
      }
      
      
    };
    return(<div className="contactPage">
        <h1>ADD Contact</h1>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" value={contact.name} onChange={(e) => setContact((prevContact) =>({...prevContact, name:e.target.value}))} required/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" type="text" value={contact.email} onChange={(e) => setContact((prevContact) =>({...prevContact, email:e.target.value}))} required/>
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input id="phone" type="text" value={contact.phone} onChange={(e) => setContact((prevContact) =>({...prevContact, phone:e.target.value}))} required/>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input id="address" type="text" value={contact.address} onChange={(e) => setContact((prevContact) =>({...prevContact, address:e.target.value}))} required/>
            </div>
            <button type="submit" className="btn btn-success saveButton" onClick={()=>{actions.addContact()}}>Save</button>
        </form>

        <button onClick={() => navigate("/")}>Go back to contact list</button>
    </div>
);
    
}
export default AddContact