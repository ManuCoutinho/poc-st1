import React from 'react'
import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RootItem } from '.'
import { MenuContextProvider } from '@/contexts/menu.context'

const mockProps = {
  parentId: '2',
  showIndicator: true,
  item: 'item 1'
}
describe('<RootItem/>', () => {
  it('should render the root component correctly', () => {
    render(
      <MenuContextProvider>
        <RootItem {...mockProps} />
      </MenuContextProvider>
    )

    expect(screen.getByText(/item 1/i)).toBeDefined()
  })
})
