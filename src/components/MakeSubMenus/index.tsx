import { useGetData } from '@/app/hooks/useGetData'
import { useMenu } from '@/app/hooks/useMenu'
import { NestedItem } from '../NestedItem'
import { RootItem } from '../RootItem'
import type { SubMenusProps } from '@/types'

export function MakeSubMenus({
  hasNestedItem,
  nestedItems,
  current
}: SubMenusProps) {
  const { filterParentsItems } = useGetData()
  const { selected, dispatchSelectNested } = useMenu()

  if (hasNestedItem) {
    return (
      <>
        <RootItem
          parentId=''
          showIndicator={hasNestedItem}
          item={current.name}
          id={current.id}
        />
        <NestedItem
          isActive={false}
          hasChildren={hasNestedItem}
          onChange={() => {}}
        >
          {hasNestedItem
            ? nestedItems.map(({ name, id }) => {
                const nestedLevel = filterParentsItems(id)
                const hasSubLevel = nestedLevel.length > 0
                return (
                  <NestedItem
                    isActive={selected.current === id}
                    hasChildren={hasSubLevel}
                    key={id}
                    onChange={() => dispatchSelectNested(id)}
                  >
                    {name}
                  </NestedItem>
                )
              })
            : null}
        </NestedItem>
      </>
    )
  }

  return (
    <NestedItem
      isActive={selected.current === current.id}
      onChange={() => dispatchSelectNested(current.id)}
      hasChildren={false}
    >
      {current.name}
    </NestedItem>
  )
}
