import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const NavbarComponent = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-logo-tm.jpg"
							width="50"
							height="50"
						/>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Login</Nav.Link>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Search Star Wars"
								aria-label="Search Star Wars"
								aria-describedby="basic-addon2"
							/>
							<Button variant="outline-secondary" id="button-addon2">
								Go
							</Button>
						</InputGroup>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};
export default NavbarComponent;

/**/
