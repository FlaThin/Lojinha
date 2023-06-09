import { Input } from "../Input";
import { LuSearch } from "react-icons/lu"
import { HiViewGrid } from "react-icons/hi"
export function Filter() {
	return (
		<div className="flex w-full gap-2 mb-6">
			<Input 
				placeholder="Search"
				hasIconleft={
					() => <LuSearch className="text-zinc-200 text-lg"/>
				} 
			/>
			<button className="bg-[#4edb86] p-3 rounded-2xl text-white text-lg">
				<HiViewGrid/>
			</button>
		</div>
	)
}