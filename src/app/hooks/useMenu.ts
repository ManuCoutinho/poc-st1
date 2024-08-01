import { useContext } from "react"
import { MenuContext } from "@/contexts/menu.context"
import { useGetData } from "./useGetData"

export function useMenu() {
  const context = useContext(MenuContext)
  const { data } = useGetData()
  const selectedPath = data.find((el) => el.id === context.selected.current)?.description
  return { ...context, selectedPath }
}