import { useState } from "react"
import Icon from "./Icons"

export default function ProfileEdit() {
	const [username, setUsername] = useState("")
	return (
		<div>
			<p className="text-[25px] text-white/30 font-semibold h-[74px] p-[20px]">
				Profile
			</p>
			<div className="px-[41px] p-[20px] flex gap-[40px]">
				<button className="w-[130px] h-[130px] border-dashed border rounded-[7px] border-white/10 bg-white bg-opacity-[0.02] flex flex-col justify-center items-center text-white/40">
					<Icon name="Plus" />
					<p>Photo</p>
				</button>
				<div className="flex flex-col font-light space-y-4">
					<input
						type="text"
						placeholder="Your name"
						className="bg-[#121212] placeholder:font-light font-light outline-none rounded-[10px] placeholder-white/20 text-white/30 w-[400px] px-[14px] p-[13px]"
					/>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="bg-[#121212] placeholder:font-light outline-none rounded-[10px] placeholder-white/20 text-white/30 w-[400px] px-[14px] p-[13px]"
					/>
					<p>learn-anything.xyz/@{username}</p>
					<input
						type="text"
						placeholder="Website"
						className="bg-[#121212] placeholder:font-light outline-none rounded-[10px] placeholder-white/20 w-[400px] px-[14px] p-[13px]"
					/>
					<input
						type="text"
						placeholder="Bio"
						className="bg-[#121212] font-light placeholder:font-light pt-2 outline-none rounded-[10px] placeholder-white/20 w-[400px] h-[120px] px-[14px] pb-[104px] text-left"
					/>
				</div>
				<button className="bg-[#121212] text-white/20 font-light outline-none rounded-[10px] py-2 px-4 mt-4 w-[120px] flex justify-center items-center whitespace-nowrap">
					Make public
				</button>
			</div>
		</div>
		// </div>
	)
}
