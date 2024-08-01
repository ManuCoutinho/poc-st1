import { useCallback, useMemo, useState } from 'react'
import { BASE_URL } from '@/constants/paths'
import type { DataType } from '@/types/model'

export function useGetData() {
  const [data, setData] = useState<DataType[]>([])

  useMemo(async () => {
    try {
      const response = await fetch(`${BASE_URL}/locations`)

      const res: DataType[] = await response.json()
      setData(res)
    } catch (error) {
      //output error message
      throw new Error(
        'An error occurred while fetching data. Please check the log.'
      )
      console.error(error)
    }
  }, [])

  const rootItems = useMemo(
    () => data?.filter(({ parent }) => parent === null),
    [data]
  )

  const filterParentsItems = useCallback(
    (id: string) => {
      const parents = data?.filter(({ parent }) => String(parent) === id)
      return parents
    },
    [data]
  )
  return { data, filterParentsItems, rootItems }
}
