import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    'box-sizing': 'border-box',
  },

  body: {
    backgroundColor: '$pink100',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, button, p': {
    font: '400 1rem Baloo, sans-serif',
  },
})
