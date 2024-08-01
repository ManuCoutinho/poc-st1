import { useGetData } from '@/app/hooks/useGetData'
import { MenuItem } from '../MenuItem'

export function Menu(): JSX.Element {
  const { rootItems } = useGetData()

  return (
    <aside className='col-span-5 md:col-span-3 w-full h-full'>
      <ul
        role='menu'
        className='h-full flex flex-col gap-4 justify-center border border-transparent border-r-zinc-200'
      >
        {rootItems?.map(({ id, name }) => (
          <MenuItem key={id} id={id} item={name} />
        ))}
      </ul>
    </aside>
  )
}
