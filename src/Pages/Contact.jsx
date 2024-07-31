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
	Textarea,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Socials from "../components/About/Socials";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_portfolio_form", "get_message_data", formRef.current, {
				publicKey: "2qwtbtqQ9yzS2C5xh",
			})
			.then(
				() => {
					alert("Sent Message!");
				},
				(error) => {
					alert("Could not send message", error.text);
				}
			);
	};

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
						</Text>
						<Divider />
						<Socials />
					</Box>
					<Box>
						<form ref={formRef} onSubmit={sendEmail}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input type="text" name="user_name" />
								<FormLabel mt={4}>Email Address</FormLabel>
								<Input type="email" name="user_email" />
								<FormLabel mt={4}>Message</FormLabel>
								<Textarea name="message" />
								<Button
									onClick={sendEmail}
									type="submit"
									mt={4}
									colorScheme="teal"
								>
									Submit
								</Button>
								<Button type="reset" mt={4} ml={4}>
									Reset
								</Button>
							</FormControl>
						</form>
					</Box>
				</SimpleGrid>
			</Container>
		</Flex>
	);
};

export default Contact;
