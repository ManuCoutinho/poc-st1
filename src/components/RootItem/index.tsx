import { useGetData } from "@/app/hooks/useGetData"
import type { RootItemProps } from "@/types"
import { NestedItem } from "../NestedItem"

export function RootItem({ id, item }: RootItemProps): JSX.Element {
  const { filterParentsItems, data } = useGetData()
  const parents = filterParentsItems(id)
  const hasParents = parents.length > 0

  return (
    <li
      role='menuitem'
      data-state=''
      aria-expanded={false}
      className='font-semibold space-y-4'
    >
      <p>{item}</p>
      {hasParents
        ? parents.map((parent) => {
          const nestedParents = filterParentsItems(parent.id)
          return (
            <NestedItem key={parent.id}>
              {parent.name}
              {nestedParents.length > 0
                ? nestedParents.map((item) => <NestedItem key={item.id}>{item.name}</NestedItem>)
                : null}
            </NestedItem>
          )
        })
        : null}
    </li>
  )
}