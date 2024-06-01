import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createJazzReactContext, DemoAuth } from "jazz-react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LaAccount } from "./schema"
import Test from "./routes/Test"
import HomeAuth from "./routes/HomeAuth"

const router = createBrowserRouter([
	{
		path: "/",
		// TODO: render HomePublic if not auth'd
		element: <HomeAuth />,
	},
	{
		path: "/test",
		element: <Test />,
	},
])

const Jazz = createJazzReactContext({
	auth: DemoAuth({ appName: "Learn Anything", accountSchema: LaAccount }),
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
