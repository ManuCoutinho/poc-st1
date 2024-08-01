import type { DataType } from './model'

export type RootItemProps = {
  id?: string
  item: string
  showIndicator: boolean
  parentId: string
}

export type MenuItemProps = {
  id: string
  item: string
}

export type NestedItemProps = {
  children: React.ReactNode
  hasChildren: boolean
  onChange: () => void
  isActive: boolean
}

export type MenuContextType = {
  selected: { parent: string; current: string }
  dispatchSelectRoot: (arg: string) => void
  dispatchSelectNested: (arg: string) => void
}

export type SubMenusProps = {
  hasNestedItem: boolean
  nestedItems: DataType[]
  current: DataType
}
