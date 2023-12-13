import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
