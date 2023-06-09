import Image from 'next/image'
import { Filter } from './Components/Filter'
import { Category } from './Components/Category'
import { Grid } from './Components/Grid'

export default function Home() {
  return (
    <div className="p-4 px-6">
      <Filter/>
      <Category/>
      <Grid/>
    </div>
  )
}