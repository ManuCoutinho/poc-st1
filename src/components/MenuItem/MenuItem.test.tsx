import React from 'react'
import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuItem } from '.'
import { MenuContextProvider } from '@/contexts/menu.context'

const mockProps = {
  id: '2',
  item: 'item 3'
}
describe('<MenuItem/>', () => {
  it('should render the root component correctly', () => {
    render(
      <MenuContextProvider>
        <MenuItem {...mockProps} />
      </MenuContextProvider>
    )
    expect(screen.getByRole('menuitem', { name: /item 3/ })).toBeDefined()
    screen.debug()
  })
})
