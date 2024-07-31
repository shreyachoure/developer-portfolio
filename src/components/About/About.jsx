import React from "react";
import "./About.css";
import Lottie from "react-lottie";
import animationData from "./animation.json";
import { Heading, Text, Button, Box, VStack, Flex } from "@chakra-ui/react";
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
		<Flex
			margin={{ base: 5, md: 2 }}
			alignItems="center"
			justifyContent="center"
			h={{ base: "auto", md: "80vh" }}
			px={{ base: 4, md: 2 }}
			flexDirection={{ base: "column", md: "row" }}
		>
			<VStack
			marginBottom="4"
				align="start"
				className="intro-section"
				flex={{ base: 1, md: 2 }}
				textAlign={{ base: "center", md: "left" }}
				w={{ base: "100%", md: "auto" }}
			>
				<Heading color="#6C63FF" size="xl" mb={4}>
					Full-stack Web and Mobile <br />
					Application Developer
				</Heading>
				{/* <Text fontSize="md" mb={4}>
						Hi there, I'm Shreya! I specialize in frontend engineering with a
						strong focus on React and TypeScript. My passion lies in creating
						user-friendly, interactive, and responsive UI experiences. With
						expertise in integrating UI seamlessly with APIs, databases, and
						cloud services, I deliver scalable, agile, and secure solutions.
					</Text>
					<Text fontSize="md" mb={4}>
						Recently, I graduated with a Master’s degree in Computer Science
						from Portland State University. My professional journey includes
						significant experience at IBM India and a dynamic startup, where I
						honed my skills as a Full Stack Developer and Software Engineer. I
						am adept at quickly adapting to new technologies and delivering
						high-quality results in a short timeframe.
					</Text>
					<Text fontSize="md" mb={4}>
						I am particularly enthusiastic about AI and Large Language Models,
						exploring their integration potential across full-stack
						applications.
					</Text>
					<Text fontSize="md" mb={4}>
						Currently, I am on the lookout for new roles in Software Development
						and Web Development, Full stack development. If you’re a recruiter
						seeking a detail-oriented and innovative software engineer, or a
						tech professional looking to exchange ideas and explore new
						technologies, I would love to connect with you!
					</Text> */}
				<Text size="xl" lineHeight="2rem">
					Hi, I'm Shreya! I'm a frontend engineer specializing in React and
					TypeScript, passionate about building user-friendly and responsive UI.
					I recently graduated with a Master’s in Computer Science from Portland
					State University. With experience at IBM India and a dynamic startup,
					I excel as a Full Stack Developer and Software Engineer, quickly
					adapting to new technologies. I'm enthusiastic about AI and Large
					Language Models, exploring their potential in full-stack applications.
					I'm currently seeking new opportunities in Software and Web
					Development. Let's connect if you're looking for an innovative
					engineer or to discuss tech ideas!
				</Text>
				<Socials />
			</VStack>
			<Box className="animation-section" flex="1" ml={{ base: 0, md: 6 }}>
				<Lottie
					options={defaultOptions}
					// maxH="400"
					// maxW="400px"
					h={{ base: "300px", md: "600px" }}
					w={{ base: "300px", md: "600px" }}
				/>
			</Box>
		</Flex>
	);
};

export default About;
