// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			"@keyframes fadeIn": {
				"0%": { opacity: 0 },
				"100%": { opacity: 1 },
			},
			"@keyframes slideIn": {
				"0%": { transform: "translateY(-20px)" },
				"100%": { transform: "translateY(0)" },
			},
			body: {
				bg: "#f7fafc",
				color: "#2D3748",
			},
		},
	},
	components: {
		Box: {
			baseStyle: {
				animation: "fadeIn 1s ease-in-out",
			},
		},
		Heading: {
			baseStyle: {
				animation: "slideIn 1s ease-in-out",
				marginBottom: "1rem",
			},
		},
		Text: {
			baseStyle: {
				animation: "fadeIn 1.5s ease-in-out",
				marginBottom: "1.5rem",
			},
		},
		FormControl: {
			baseStyle: {
				animation: "fadeIn 2s ease-in-out",
			},
		},
		Input: {
			baseStyle: {
				marginBottom: "1rem",
				borderColor: "#3182ce",
				_focus: {
					borderColor: "#63b3ed",
					boxShadow: "0 0 0 1px #63b3ed",
				},
			},
		},
		Button: {
			baseStyle: {
				bg: "#6C63FF",
				color: "white",
				_hover: {
					bg: "#6C63FF",
				},
				marginRight: "0.5rem",
				"&:last-child": {
					marginRight: "0",
				},
			},
		},
		Badge: {
			baseStyle: {
				color: "white",
				bg: "#6C63FF",
			},
		},
	},
});

export default theme;
