export function Category() {
	return (
		<div className="flex">
			<div className="flex gap-2 overflow-scroll pb-4">
				<div className="text-xs whitespace-nowrap p-2 rounded-xl text-zinc-200 border-zinc-100 border-2">Capas</div>
				<div className="text-xs whitespace-nowrap p-2 rounded-xl bg-[#4edb86] text-white border-2 border-[#4edb86]">Guirlandas</div>
				<div className="text-xs whitespace-nowrap p-2 rounded-xl text-zinc-200 border-zinc-100 border-2">Acessórios para bebês</div>
				<div className="text-xs whitespace-nowrap p-2 rounded-xl  text-zinc-200 border-zinc-100 border-2">Necessaire</div>
			</div>
		</div>
	)
}