import React,{useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { stringify } from 'query-string';

export const ContactCard = ({contact}) => {
  const {actions} = useContext(Context);
  const {name, phone, email, address} = contact
  // const contactId = contact.id;
  // const contactIdString = contactId.toString();
  const navigate=  useNavigate();
  // console.log(contactIdString);


  

  
  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text fs-3">{phone}</p>
            <p className="card-text fs-3">{email}</p>
            <p className="card-text fs-3">{address}</p>
            <Link to = {`/edit/${contact.id}`}><button className="btn btn-secondary">Edit Contact</button></Link>
            <button className="btn btn-danger" onClick={() => actions.deleteContact(contact)}>Delete Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

  
    


