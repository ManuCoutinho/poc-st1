import { useMenu } from '@/app/hooks/useMenu'

export function MainView() {
  const { selectedPath } = useMenu()

  if(!selectedPath) {
    return  
  }
  return (
    <div className='col-span-4 md:col-span-8 w-full grid place-items-center h-full p-6'>
      <p className='text-xl'>
        Current: <strong>{selectedPath}</strong>
      </p>
    </div>
  )
}
