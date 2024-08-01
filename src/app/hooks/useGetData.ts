import { useCallback, useMemo, useState } from 'react'
import { BASE_URL } from '@/constants/paths'
import type { DataType } from '@/types/model'

export function useGetData() {
  const [data, setData] = useState<DataType[]>([])

  useMemo(async () => {
    try {
      const response = await fetch(`${BASE_URL}/locations`)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const res: DataType[] = await response.json()
      setData(res)
    } catch (error) {
      //output error message
      console.error(error)
    }
  }, [])

  const filterParents = useCallback(
    (id: string) => {
      const parents = data?.filter(({ parent }) => String(parent) === id)
      return parents
    },
    [data]
  )
  return { data, filterParents }
}
