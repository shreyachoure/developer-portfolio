import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
const Layout = ({ children }) => {
	return (
		<Box>
		
			<Navbar />
			<main>{children}</main>
			<Outlet />
		
		</Box>
	);
};

export default Layout;
