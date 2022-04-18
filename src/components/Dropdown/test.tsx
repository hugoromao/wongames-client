import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>

    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', async () => {
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(content).toHaveStyle({ opacity: 0 })
    await waitFor(() => {
      expect(content.getAttribute('aria-hidden')).toBe('false')
    })
  })

  it('should handle open/close when clicking on overlay', async () => {
    const content = screen.getByText(/content/).parentElement!
    const overlay = content.nextElementSibling

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    await waitFor(() => {
      expect(overlay).toHaveStyle({ opacity: 1 })
      expect(overlay!.getAttribute('aria-hidden')).toBe('false')
    })

    userEvent.click(overlay!)

    await waitFor(() => {
      expect(overlay!.getAttribute('aria-hidden')).toBe('true')
    })
  })
})
