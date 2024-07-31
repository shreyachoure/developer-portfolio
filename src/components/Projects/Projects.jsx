import React from "react";
import { ProjectData } from "./ProjectData";
import "../../App.css";
import "./Projects.css";
import {
	Box,
	Text,
	Card,
	CardHeader,
	CardBody,
	Heading,
	Image,
	ScaleFade,
	Stack,
	SimpleGrid,
	CardFooter,
} from "@chakra-ui/react";

const Projects = () => {
	return (
		<SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
			{ProjectData.map((project) => (
				<Box>
					<Card flex="1" display="flex" flexDirection="column">
						<CardBody flex="1">
							<Stack spacing={3}>
								<Image boxSize="150px" alt="project" src={project.image} />

								<Heading size="md">{project.title}</Heading>

								<Text>{project.description}</Text>
								<Text
									className="github-project card-link"
									href={project.github}
								>
									Github Link
								</Text>
							</Stack>
						</CardBody>
					</Card>
				</Box>
			))}
		</SimpleGrid>
	);
};

export default Projects;
