import React, { useState, useEffect, useContext } from "react";
import { Link} from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

function AddContact () {
    return(
        <div className="contactPage">
            <h1>ADD Contacts</h1>
            <div>
                <label for="name">Name</label>
                <input id="name" type="text"/>
                <label for="email">Email</label>
                <input type="text" id="email"/>
                <label for="phoneNumber"></label>
                <input type="text" id="phoneNumber"/>
                <label for="address">Address</label>
                <input type="text" id="address"/>
            </div>
            <button className="btn btn-success" onClick={()=>action.updateCotact}>
                Save
            </button>
            <Link to="/contact">
               go back to contact list
            </Link>
            
        </div>
    )
}