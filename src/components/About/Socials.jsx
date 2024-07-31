const Socials = () => {
	return (
		<div>
			<ul className="socials">
				<li className="social-item">
					<a href="mailto:schoure@pdx.edu" aria-label="gmail-link">
						<box-icon
							className="social-logo"
							type="logo"
							name="gmail"
							color="#6C63FF"
							alt="gmail-logo"
						></box-icon>
					</a>
				</li>
				<li className="social-item">
					<a href="https://github.com/schoure98" aria-label="github-link">
						<box-icon
							className="social-logo"
							type="logo"
							name="github"
							color="#6C63FF"
							alt="github logo"
						></box-icon>
					</a>
				</li>
				<li className="social-item">
					<a
						href="https://www.linkedin.com/in/shreya-choure/"
						aria-label="linkedin-link"
					>
						<box-icon
							className="social-logo"
							type="logo"
							name="linkedin"
							color="#6C63FF"
							alt="linkedin logo"
						></box-icon>
					</a>
				</li>
				<li className="social-item">
					<a
						href="https://www.instagram.com/shreyachoure/"
						aria-label="instagram-link"
					>
						<box-icon
							className="social-logo"
							type="logo"
							name="instagram"
							color="#6C63FF"
							alt="instagram logo"
						></box-icon>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
