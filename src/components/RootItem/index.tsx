import { useGetData } from "@/app/hooks/useGetData"
import type { RootItemProps } from "@/types"
import { NestedItem } from "../NestedItem"

export function RootItem({ id, item }: RootItemProps): JSX.Element {
  const { filterParents, data } = useGetData()
  const parents = filterParents(id)
  const hasParents = parents.length > 0
  console.log('😭', parents)
  return (
    <li
      role='menuitem'
      data-state=''
      aria-expanded={false}
      className='font-semibold space-y-4'
    >
      <p>{item}</p>
      {hasParents
        ? parents.map(({ id, name }) => {
          const nestedParents = filterParents(id)
          return (
            <NestedItem key={id}>
              {name}
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