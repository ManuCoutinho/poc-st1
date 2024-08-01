
export function NestedItem({children}: { children: React.ReactNode }): JSX.Element {
 
  return(
    <div role='menuitem' className="cursor-pointer ps-3 font-normal" aria-expanded={false}>{children}</div>
  )
}