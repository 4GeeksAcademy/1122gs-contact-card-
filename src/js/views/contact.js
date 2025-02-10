import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

function Contact () {
  const { store, actions } = useContext(Context);

    // useEffect(() => {
    //     actions.getContacts();  
    // }, []);

    return(
    <div className="showingContact">
      <Link to='/add-contact'>
            <button className="btn btn-success"> Add Contact</button>
      </Link>
      <div>
        {/* {actions.getContacts()} */}
      </div>


    </div>
)}
export default Contact