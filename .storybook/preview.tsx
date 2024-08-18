import '@/assets/the-new-css-reset.css'
import '@/assets/global.css'
import type { Preview } from '@storybook/react'

/** @see https://stackoverflow.com/questions/76933793/how-to-write-decorator-in-typescript-for-storybook */
import React from 'react'

const preview: Preview = {
  decorators: [
    // FIXME: components以外はwidthを576pxに固定したい
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus-visible',
      focus: '#focus',
    },
    nextjs: {
      /**
       * next/navigationを有効にする場合下記のセットアップが必要になる
       * @see https://storybook.js.org/docs/get-started/nextjs#set-nextjsappdirectory-to-true
       */
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
