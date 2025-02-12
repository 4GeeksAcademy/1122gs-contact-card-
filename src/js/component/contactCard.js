import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { stringify } from "query-string";
import { Link } from "react-router-dom"; 


export const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const { name, phone, email, address } = contact;
  // const contactId = contact.id;
  // const contactIdString = contactId.toString();
  const navigate = useNavigate();
  // console.log(contactIdString);

  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://th.bing.com/th/id/R.0ef3f46e721fc38992d27ae094d8839d?rik=pkkoLMJ1sYH5%2bQ&riu=http%3a%2f%2fcdn.ebaumsworld.com%2fmediaFiles%2fpicture%2f1035099%2f85708057.jpg&ehk=0s2rVcOCi7BxjLnx3xC6W7QoS3gzbFcqqunGh21%2boZw%3d&risl=&pid=ImgRaw&r=0"
            className="img-fluid rounded-start contactImage"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title fs-6">{name}</h3>
            <p className="card-text fs-6">{phone}</p>
            <p className="card-text fs-6">{email}</p>
            <p className="card-text fs-6">{address}</p>
            <div className="editAndDelete d-flex justify-content-end align-items-center mt-2">
              <Link to={`/edit/${contact.id}`}>
                <button className="btn btn-secondary me-3" onClick={()=>navigate(`/edit/${id}`)}>Edit Contact</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => actions.deleteContact(id)}
              >
                Delete Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};