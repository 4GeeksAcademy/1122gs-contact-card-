import React,{useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { stringify } from 'query-string';

export const ContactCard = ({contact}) => {
  const {store,actions} = useContext(Context);
  const contactId = contact.id;
  const contactIdString = contactId.toString();
  const navigate=  useNavigate();
  console.log(contactIdString);

  const handleClick = () => {
    navigate("edit" + contactIdString );

  
  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{contact.name}</h3>
            <p className="card-text fs-3">{contact.email}</p>
            <p className="card-text fs-3">{contact.phone}</p>
            <p className="card-text fs-3">{contact.address}</p>
            <button className="btn btn-secondary" onClick={handleClick} >Edit Contact</button>
            <button className="btn btn-danger" onClick={() => actions.deleteContact(contact.id)}>Delete Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

  
    

}
