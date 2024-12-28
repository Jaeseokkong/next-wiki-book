import React from 'react'
import type { Preview } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'
import * as NextImage from 'next/image'

export const parameters = {
  actions: { argTypeRegex: '^on[A-Z].*'},
  controls : {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}

const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

* {
    box-sizing: border-box;
}

a {
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color: #000;
}

ol, ul {
    list-style: none;
}
`

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story/>
      </ThemeProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// next/image 교체
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true, // 재정의를 허용
  writable: true,     // 값을 다시 쓸 수 있도록 허용
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src}/>
  ) : (
    <OriginalNextImage {...props} unoptimized />
  )
})


export default preview;