"use client"
import { observer, useObservable } from "@legendapp/state/react"
import { GoSearch } from "react-icons/go"
import { PiLinkSimple, PiPictureInPictureThin } from "react-icons/pi"

interface Props {}
export default observer(function ProfileRoute(props: Props) {
	const local = useObservable({
		prettyName: "Nikita",
		username: "nikita",
		profileLink: "https://nikiv.dev",
		topicsLearning: 64,
		topicsToLearn: 124,
		topicsLearned: 12,
		pages: [
			{ title: "physics", prettyName: "Physics", pageUrl: "hi" },
			{ title: "karabiner", prettyName: "Karabiner", pageUrl: "hi" },
		],
		publicPages: [
			{
				title: "Figma",
			},
			{
				title: "Ableton 12",
			},
		],
		personalLinks: [
			{
				title: "Modern JavaScript Tutorial",
				url: "https://javascript.info",
				topic: "JavaScript",
			},
			{
				title: "Modern Rust Tutorial",
				url: "https://doc.rust-lang.org/rust-by-example/",
				topic: "Rust",
			},
		],
	})
	return (
		<div
			className="p-4 text-white min-h-screen"
			style={{ backgroundColor: "#0f0f0f" }}
		>
			<div className="space-y-4">
				{local.personalLinks.map((link, index) => (
					<div
						key={index}
						style={{ backgroundColor: "#121212" }}
						className="flex items-center justify-between p-4 rounded hover:cursor-pointer"
					>
						<div className="flex space-x-5 items-center">
							<PiPictureInPictureThin />
							<a className="text-white">{link.title.toString()}</a>
							<div className="flex flex-row items-center text-zinc-800 hover:cursor-pointer">
								<PiLinkSimple className="mr-1" />
								<a>{link.url.toString()}</a>
							</div>
						</div>

						<span
							style={{ backgroundColor: "#1b1b1b" }}
							className="text-zinc-300 p-3 rounded-md"
						>
							{link.topic.toString()}
						</span>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-5">
				<div className="relative w-[30%]">
					<input
						type="text"
						placeholder="Search or Add"
						style={{ backgroundColor: "#202020" }}
						className="text-zinc-400 placeholder:text-zinc-700 pl-10 pr-10 placeholder:text-center px-2 py-3 rounded-xl w-full border border-zinc-600"
					/>
					<GoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-zinc-700" />
				</div>
			</div>
		</div>
	)
})
