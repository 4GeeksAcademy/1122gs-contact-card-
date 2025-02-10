import React, { useState, useEffect, useContext, } from "react";
import { useNavigate} from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

function AddContact () {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.id]: e.target.value });
    };

    const handleSubmit = () => {
        actions.addContact(contact); 
        navigate("/"); 
    };
    return(<div className="contactPage">
        <h1>ADD Contact</h1>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" value={contact.name} onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" type="text" value={contact.email} onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input id="phone" type="text" value={contact.phone} onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input id="address" type="text" value={contact.address} onChange={handleChange} required/>
            </div>
            <button type="submit" className="btn btn-success saveButton" onClick={()=>{actions.addContact()}}>Save</button>
        </form>

        <button onClick={() => navigate("/")}>Go back to contact list</button>
    </div>
);
    
}
export default AddContact