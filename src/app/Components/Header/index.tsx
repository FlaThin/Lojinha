import { Actions } from "../Actions";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-2">
      <h1 className="text-xl font-medium">Descubra</h1>
      <Actions/>
    </header>
  )
}