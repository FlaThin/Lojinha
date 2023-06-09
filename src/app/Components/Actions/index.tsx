import { TbBellFilled } from "react-icons/tb"
import { CiSliderHorizontal } from "react-icons/ci"

export function Actions() {
	return (
		<ul className="flex gap-2">
			<li className="border-zinc-200 border-[1px] rounded-full h-fit p-2 text-lg text-[#333333]">
				<TbBellFilled />
			</li>
			<li className="border-zinc-200 border-[1px] rounded-full h-fit p-2 text-lg text-[#333333]">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"></path></svg>
			</li>
		</ul>
	)
}