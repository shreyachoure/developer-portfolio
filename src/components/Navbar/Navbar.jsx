import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<Box
			className="navigation"
			m={4}
			mx="auto"
			w="400px"
			h="50px"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<HStack cursor="pointer" spacing={5}>
				<Link className="navLink" to="/">
					Home
				</Link>

				<Link className="navLink" to="/projects">
					Projects
				</Link>
				<Link className="navLink" to="/work">
					Work
				</Link>
				<Link className="navLink" to="/contact">
					Contact
				</Link>
			</HStack>
		</Box>
	);
};

export default Navbar;
