import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Work from "./Pages/Work";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{
					path: "/",
					element: <Homepage />,
				},
				{
					path: "/projects",
					element: <Projects />,
				},
				{
					path: "/work",
					element: <Work />,
				},
				{
					path: "contact",
					element: <Contact />,
				},
			],
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
};

export default App;
