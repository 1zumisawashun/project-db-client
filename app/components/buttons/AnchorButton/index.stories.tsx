import type { Meta, StoryObj } from '@storybook/react'

import { AnchorButton } from './index'
import { items } from '../buttons.constant'

const meta: Meta<typeof AnchorButton> = {
  title: 'button/AnchorButton',
  component: AnchorButton,
}

export default meta

type Story = StoryObj<typeof AnchorButton>

function Render() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item) => (
        <div
          style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}
          key={item.id}
        >
          <AnchorButton href="#" variant={item.variant} theme={item.theme}>
            default
          </AnchorButton>
          <AnchorButton
            href="#"
            variant={item.variant}
            theme={item.theme}
            id="hover"
          >
            hover
          </AnchorButton>
          <AnchorButton
            href="#"
            variant={item.variant}
            theme={item.theme}
            id="active"
          >
            active
          </AnchorButton>
          <AnchorButton
            href="#"
            variant={item.variant}
            theme={item.theme}
            id="focus-visible"
          >
            focus visible
          </AnchorButton>
          <AnchorButton
            href="#"
            variant={item.variant}
            theme={item.theme}
            disabled
          >
            disabled
          </AnchorButton>
        </div>
      ))}
    </div>
  )
}

export const Default: Story = {
  args: {},
  render: Render,
}
