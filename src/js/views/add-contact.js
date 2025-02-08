import React, { useState, useEffect, useContext } from "react";
import { Link} from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

function AddContact () {
    return(
        <div className="contactPage">
            <h1>ADD Contacts</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email"/>
            </div>
            <div>    
                <label htmlFor="phoneNumber"></label>
                <input type="text" id="phoneNumber"/>
            </div>
            <div>    
                <label htmlFor="address">Address</label>
                <input type="text" id="address"/>
            </div>

            <button className="btn btn-success" onClick={()=>action.AddContact}>
                Save
            </button>
            
            <Link to="/contact">
               go back to contact list
            </Link>
            
        </div>
    )
}
export default AddContact