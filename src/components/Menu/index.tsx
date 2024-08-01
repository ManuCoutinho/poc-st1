import { useGetData } from "@/app/hooks/useGetData"
import { RootItem } from "../RootItem"

export function Menu(): JSX.Element {
  const { data } = useGetData()
  return (
    <ul role='menu' className="w-full h-full p-4 flex flex-col gap-4 justify-center">
      {data?.map(({ id, name}) => (
        <RootItem key={id} id={id} item={name}/>
      ))}
    </ul>
  )
}