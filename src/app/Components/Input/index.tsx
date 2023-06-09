import { InputHTMLAttributes } from "react";

type InputProps = {
  hasIconleft?: () => void
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ hasIconleft, ...rest }: InputProps) {
  return (
    <label for="id" className="flex rounded-2xl px-3 py-2 bg-zinc-100 gap-2 items-center flex-1">
      {hasIconleft && hasIconleft()}
      <input id="id" type="text" {...rest} className="bg-transparent outline-none text-sm" />
    </label>
  )
}