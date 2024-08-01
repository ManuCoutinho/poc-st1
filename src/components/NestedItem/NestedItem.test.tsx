import React from 'react'
import { expect, it, describe, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { NestedItem } from '.'
import { MenuContextProvider } from '@/contexts/menu.context'

const mockProps = {
  hasChildren: false,
  onChange: vi.fn(),
  isActive: true,
  children: 'item 2'
}
describe('<NestedItem/>', () => {
  it('should render the root component correctly', () => {
    render(
      <MenuContextProvider>
        <NestedItem {...mockProps} />
      </MenuContextProvider>
    )

    expect(
      within(screen.getByTestId('nested-item')).getByText(/item 2/i)
    ).toBeDefined()
    
  })
})
