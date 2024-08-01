'use client'
import { MainView } from '@/components/MainView'
import { Menu } from '@/components/Menu'
import { MenuContextProvider } from '@/contexts/menu.context'

export default function Home() {
  return (
    <MenuContextProvider>
      <main className='min-h-screen grid grid-cols-12 relative'>
        <Menu />
        <MainView />
      </main>
    </MenuContextProvider>
  )
}
