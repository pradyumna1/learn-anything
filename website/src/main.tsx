import { createJazzReactContext, DemoAuth } from "jazz-react"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import HomeAuthRoute from "./routes/HomeAuthRoute"
import TestRoute from "./routes/TestRoute"
import ProfileEditRoute from "./routes/ProfileEditRoute"
import ProfileRoute from "./routes/ProfileRoute"
import { LaAccount } from "./schema"
import GlobalTopicRoute from "./routes/GlobalTopicRoute"
// import PersonalPageRoute from "./routes/PersonalPageRoute"

const router = createBrowserRouter([
	{
		path: "/",
		// TODO: render HomePublic if not auth'd
		element: <HomeAuthRoute />,
	},
	{
		path: "/test",
		element: <TestRoute />,
	},
	{
		path: "/edit-profile",
		element: <ProfileEditRoute />,
	},
	{
		path: "/:username",
		element: <ProfileRoute />,
	},
	{
		path: "*",
		element: <HomeAuthRoute />,
	},
	{
		path: "/globaltopic",
		element: <GlobalTopicRoute />,
	},
	// {
	// 	path: "/@:username/:page-name",
	// 	element: <PersonalPageRoute />,
	// },
])

const Jazz = createJazzReactContext({
	auth: DemoAuth({
		appName: "Learn Anything",
		accountSchema: LaAccount,
		seedAccounts:
			import.meta.env.VITE_SEED_ACCOUNTS &&
			JSON.parse(import.meta.env.VITE_SEED_ACCOUNTS),
	}),
	peer: "wss://mesh.jazz.tools/?key=nikita@nikiv.dev",
})
export const { useAccount, useCoState } = Jazz

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Jazz.Provider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Jazz.Provider>,
)
