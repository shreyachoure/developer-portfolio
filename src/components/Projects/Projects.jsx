import React from "react";
import { ProjectData } from "./ProjectData";
import "../../App.css";
import "./Projects.css";
import {
	Box,
	Text,
	Card,
	CardBody,
	Heading,
	Image,
	Stack,
	SimpleGrid,
	Link,
	Badge,
} from "@chakra-ui/react";

const Projects = () => {
	return (
		<Box margin="5">
			<SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="40px">
				{ProjectData.map((project) => (
					<Box>
						<Card flex="1" display="flex" flexDirection="column">
							<CardBody flex="1">
								<Stack>
									<Image alt="project" src={project.image} />

									<Heading size="md">{project.title}</Heading>

									<Text>{project.description}</Text>
									<Link
										marginBottom="0"
										className="github-project card-link"
										href={project.github}
										isExternal
									>
										Github Link
									</Link>

									<Link
										marginLeft="0 !important"
										className="github-project card-link"
										href={project.demo}
										isExternal
									>
										<Badge>Application Link</Badge>
									</Link>
								</Stack>
							</CardBody>
						</Card>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Projects;
