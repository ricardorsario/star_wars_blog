import React from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<span className="legend">
			<p className="legend">May the Force be with you...</p>
			<p>Follow Star Wars</p>
		</span>

		<p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
		<div className="links">
			<a href="#login">Terms of use | </a>

			<a href="#login"> Privacy Policys | </a>

			<a href="#login"> Star Wars Helpdesk | </a>
		</div>
	</footer>
);
