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
import { experience } from "./data";

const MotionBox = motion(Box);

const WorkExperience = () => {
	return (
		<Box p={8} bg="gray.50" borderRadius="lg">
			<Heading color="#6C63FF" as="h2" size="xl" mb={6} textAlign="center">
				Work Experience
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
				{experience.map((exp, index) => (
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
								<Heading as="h3" size="md">
									{exp.role}
								</Heading>
							</HStack>
							<Badge colorScheme="teal">{exp.duration}</Badge>
						</Flex>
						<Text fontWeight="bold" fontSize="lg" mb={2}>
							{exp.company}
						</Text>
						<Text lineHeight="2rem">{exp.description}</Text>
					</MotionBox>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default WorkExperience;
