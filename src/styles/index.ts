import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  globalCss,
  keyframes,
  styled,
  getCssText,
  theme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray100: '#E1E1E6',
      gray300: '#C4C4CC',
      gray400: '#8D8D99',
      gray500: '#7C7C8A',
      gray600: '#323238',
      gray700: '#29292E',
      gray800: '#202024',
      gray900: '#121214',

      pink100: '#F28DB2',
      pink300: '#EF72A5',
      pink500: '#EA4A92',
      pink700: '#C24D81',

      blue300: '#A0C5F7',
      blue500: '#6A9CDE',
      blue700: '#3E5F8A',
    },

    fontSizes: {
      pq: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
