import React from "react";
import "./About.css";
import Lottie from "react-lottie";
import animationData from "./animation.json";
import { Heading, Text, Button, Box, VStack } from "@chakra-ui/react";
import Socials from "./Socials";

const About = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="container my-4" id="about">
			<div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
				<VStack spacing={4} align="start" className="intro-section">
					<Heading as="h2" color="#6C63FF" size="2xl" mb={4}>
						Full-stack Web and Mobile App Developer
					</Heading>
					<Text fontSize="lg" mb={4}>
						Hi there, I'm Shreya! I specialize in frontend engineering with a
						strong focus on React and TypeScript. My passion lies in creating
						user-friendly, interactive, and responsive UI experiences. With
						expertise in integrating UI seamlessly with APIs, databases, and
						cloud services, I deliver scalable, agile, and secure solutions.
					</Text>
					<Text fontSize="lg" mb={4}>
						I am particularly enthusiastic about AI and Large Language Models,
						exploring their integration potential across full-stack
						applications.
					</Text>
					<Socials />
				</VStack>
				<Box className="animation-section" flex="1" ml={{ base: 0, md: 6 }}>
					<Lottie options={defaultOptions} height={400} width={400} />
				</Box>
			</div>
		</div>
	);
};

export default About;
