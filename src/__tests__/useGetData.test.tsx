import React from 'react'
import { expect, test, describe, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetData } from '../app/hooks/useGetData'


vi.spyOn(React, 'useState')
vi.spyOn(React, 'useCallback')
vi.spyOn(React, 'useMemo')
describe('useGetData hook', () => {
  test('data fetch with success status', async () => {
    const { result } = renderHook(() => useGetData(), {})

    waitFor(() => expect(result.current).not.toBeUndefined())
    
  })
})
