import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { ContactCard } from "../component/contactCard";

function Contact() {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //     actions.getContacts();
  // }, []);

  return (
    <div className="showingContact">
      <div className="addNewContact">
        <Link to="/add-contact">
          <button className="btn btn-success "> Add Contact</button>
        </Link>
      </div>

      <div>
        {store.contacts?.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}
export default Contact;
