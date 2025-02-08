import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<Link to='/add-contact'>
			<button className="btn btn-success"> Add Contact</button>
		</Link>
	);
};
