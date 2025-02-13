import React, { useState, useEffect, useContext } from "react";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditCard = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  useEffect(() => {
    actions.getContacts();
    store.contacts.map((item) => {
      if (item.id == id) {
        setContact(item);
      }
    });
  }, []);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await actions.updateContact(contact);
      await actions.getContacts();
      navigate("/");
    } catch (error) {
      console.log("Error adding contact", error);
    }
  };

  console.log(contact);
  return (
    <div className="contactPage">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            type="text"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success updateButton">
          Update
        </button>
      </form>

      <button onClick={() => navigate("/")}>Go back to contact list</button>
    </div>
  );
};
