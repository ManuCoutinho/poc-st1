import { createContext, useCallback, useState } from 'react'
import type { MenuContextType } from '@/types'

export const MenuContext = createContext<MenuContextType>({} as MenuContextType)

export function MenuContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [selectedPath, setSelectedPath] = useState({
    parent: '',
    current: ''
  })

  const dispatchSelectRoot = useCallback((arg: string) => {
    setSelectedPath((prev) => ({
      ...prev,
      parent: prev.parent === arg ? '' : arg
    }))
  }, [])

  const dispatchSelectNested = useCallback((arg: string) => {
    setSelectedPath((prev) => ({
      ...prev,
      current: prev.current === arg ? '' : arg
    }))
  }, [])

  return (
    <MenuContext.Provider
      value={{
        selected: selectedPath,
        dispatchSelectRoot,
        dispatchSelectNested
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
