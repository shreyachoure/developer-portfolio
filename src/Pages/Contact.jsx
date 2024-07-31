import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	SimpleGrid,
	Container,
	Flex,
	Divider,
} from "@chakra-ui/react";
import React from "react";
import Socials from "../components/About/Socials";

const Contact = () => {
	return (
		<Flex
			height="100vh"
			alignItems="center"
			justifyContent="center"
			backgroundColor="gray.50"
			overflow="hidden"
		>
			<Container maxW="container.md" minH="60vh">
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					<Box>
						<Heading color="#6C63FF" size="lg">
							Contact Me
						</Heading>
						<Heading size="md" mt={2}>
							Get in Touch
						</Heading>
						<Text mt={4} pb={2}>
							I'm always open to discussing new projects, creative ideas, or
							opportunities to be part of your vision. Whether you have a
							question, a proposal, or just want to say hello, feel free to
							reach out!
							<Divider />
							<Socials />
						</Text>
					</Box>
					<Box>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input type="text"></Input>
							<FormLabel mt={4}>Email Address</FormLabel>
							<Input type="email"></Input>
							<Button type="submit" mt={4} colorScheme="teal">
								Submit
							</Button>
							<Button type="reset" mt={4} ml={4}>
								Reset
							</Button>
						</FormControl>
					</Box>
				</SimpleGrid>
			</Container>
		</Flex>
	);
};

export default Contact;
