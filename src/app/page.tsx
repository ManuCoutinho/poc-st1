'use client'
import { Menu } from '@/components/Menu'

export default function Home() {
  return (
    <main className='min-h-screen grid grid-cols-12'>
      <div className='col-span-3 border border-transparent border-r-zinc-200 p-4'>
        <Menu />
      </div>
      <div className='col-span-8'>
        <p>description</p>
      </div>
    </main>
  )
}
