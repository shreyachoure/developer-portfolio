import React from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Badge,
	HStack,
	Icon,
	SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const workExperiences = [
	{
		company: "SandStream Marketing",
		role: "Software Engineer",
		duration: "Jan 2020 - Present",
		description:
			"Developed and maintained web applications, enhancing user experience and increasing engagement by 30%.",
	},
	{
		company: "IBM",
		role: "Full Stack Developer",
		duration: "Jun 2018 - Dec 2019",
		description:
			"Built scalable, secure applications with Node.js and React, improving system performance by 40%.",
	},
	{
		company: "Kerkar Media",
		role: "Frontend Developer",
		duration: "Jan 2016 - May 2018",
		description:
			"Created responsive and interactive UIs with React, boosting client satisfaction by 25%.",
	},
	{
		company: "Programming Hub",
		role: "Software Developer Intern",
		duration: "Jun 2015 - Dec 2015",
		description:
			"Assisted in the development of educational software, contributing to a 15% increase in user retention.",
	},
];

const MotionBox = motion(Box);

const WorkExperience = () => {
	return (
		<Box p={8} bg="gray.50" borderRadius="lg">
			<Heading color="#6C63FF" as="h2" size="xl" mb={6} textAlign="center">
				Work Experience
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
				{workExperiences.map((experience, index) => (
					<MotionBox
						key={index}
						p={5}
						borderWidth="1px"
						borderRadius="lg"
						bg="white"
						shadow="md"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						_hover={{ boxShadow: "xl" }}
					>
						<Flex justify="space-between" align="center" mb={3}>
							<HStack spacing={3}>
								<Icon as={FaBriefcase} w={6} h={6} color="#6C63FF" />
								<Heading as="h3" size="md">
									{experience.role}
								</Heading>
							</HStack>
							<Badge colorScheme="teal">{experience.duration}</Badge>
						</Flex>
						<Text fontWeight="bold" fontSize="lg" mb={2}>
							{experience.company}
						</Text>
						<Text>{experience.description}</Text>
					</MotionBox>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default WorkExperience;
