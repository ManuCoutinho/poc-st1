import { useMenu } from '@/app/hooks/useMenu'
import { MenuIndicator } from '../MenuIndicator'
import type { RootItemProps } from '@/types'

export function RootItem({
  id,
  item,
  showIndicator,
  parentId
}: RootItemProps): JSX.Element {
  const { dispatchSelectNested, dispatchSelectRoot, selected } = useMenu()
  const isActive = selected.current === id || selected.parent === parentId
  function handleSelectMenuItem() {
    if (parentId) {
      dispatchSelectRoot(parentId)
    }
    if(id) {
      dispatchSelectNested(id)
    }
  }

  return (
    <div
      className={`flex items-center gap-2 hover:bg-zinc-500/10 py-2 pr-4 transition-colors ${parentId ? 'pl-6' : 'pl-8'}`}
      onClick={handleSelectMenuItem}
    >
      <MenuIndicator show={showIndicator} selected={isActive} />
      <p className='font-semibold'>{item}</p>
    </div>
  )
}
