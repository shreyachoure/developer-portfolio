import { Link } from "@chakra-ui/react";

const Socials = () => {
	return (
		<div>
			<ul className="socials">
				<li className="social-item">
					<Link
						href="mailto:schoure@pdx.edu"
						isExternal
						aria-label="gmail-link"
					>
						<box-icon
							className="social-logo"
							type="logo"
							name="gmail"
							color="#6C63FF"
							alt="gmail-logo"
						></box-icon>
					</Link>
				</li>
				<li className="social-item">
					<Link
						href="https://github.com/shreyachoure"
						isExternal
						aria-label="github-link"
					>
						<box-icon
							className="social-logo"
							type="logo"
							name="github"
							color="#6C63FF"
							alt="github logo"
						></box-icon>
					</Link>
				</li>
				<li className="social-item">
					<Link
						href="https://www.linkedin.com/in/shreya-choure/"
						isExternal
						aria-label="linkedin-link"
					>
						<box-icon
							className="social-logo"
							type="logo"
							name="linkedin"
							color="#6C63FF"
							alt="linkedin logo"
						></box-icon>
					</Link>
				</li>
				<li className="social-item">
					<Link
						href="https://www.instagram.com/shreyachoure/"
						isExternal
						aria-label="instagram-link"
					>
						<box-icon
							className="social-logo"
							type="logo"
							name="instagram"
							color="#6C63FF"
							alt="instagram logo"
						></box-icon>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
