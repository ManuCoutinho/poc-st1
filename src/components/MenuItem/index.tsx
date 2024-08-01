import { useGetData } from '@/app/hooks/useGetData'
import { useMenu } from '@/app/hooks/useMenu'
import { MakeSubMenus } from '../MakeSubMenus'
import { RootItem } from '../RootItem'
import type { MenuItemProps,  } from '@/types'

export function MenuItem({ id, item }: MenuItemProps): JSX.Element {
  const { selected } = useMenu()
  const { filterParentsItems } = useGetData()
  const parents = filterParentsItems(id)
  const hasParents = parents.length > 0
  const dataState = selected.parent === id ? 'open' : 'close'
  const isActive = selected.parent === id

  return (
    <li
      role='menuitem'
      data-state={dataState}
      aria-expanded={isActive}
      className='group cursor-pointer will-change-transform transition-transform data-[state=open]:-translate-y-2'
    >
      <RootItem parentId={id} item={item} showIndicator={hasParents} />
      <div
        className={`transition-opacity ${
          isActive ? 'visible opacity-100' : 'hidden opacity-0'
        }`}
      >
        {hasParents
          ? parents.map((parent) => {
              const nestedItems = filterParentsItems(parent.id)
              const hasNestedItems = nestedItems.length > 0
              return (
                <MakeSubMenus
                  key={parent.id}
                  hasNestedItem={hasNestedItems}
                  nestedItems={nestedItems}
                  current={parent}
                />
              )
            })
          : null}
      </div>
    </li>
  )
}
