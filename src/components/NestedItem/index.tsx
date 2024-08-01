import type { NestedItemProps } from '@/types'

export function NestedItem({
  children,
  hasChildren,
  onChange,
  isActive
}: NestedItemProps) {
  return (
    <div
      onClick={onChange}
      id='nested-item'
      className={`cursor-pointer font-normal hover:bg-zinc-500/10 transition-colors ${
        hasChildren ? 'ps-2 py-1' : 'ps-[3.75rem] py-2'
      } ${isActive && 'bg-amber-500/10'}`}
    >
      {children}
    </div>
  )
}
