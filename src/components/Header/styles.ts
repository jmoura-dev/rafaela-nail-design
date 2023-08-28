import { keyframes, styled } from '@/styles'

const leftRight = keyframes({
  '0%': { transform: 'translateX(-50%)', opacity: '0' },
  '100%': { transform: 'translateX(0)', opacity: '1' },
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  backgroundColor: '$pink500',
  width: '100%',
  boxShadow: '0px 2px 25px rgba(0, 0, 0, 0.8)',
  background: 'linear-gradient(180deg, #EA4A92 0%, #C24D81 100%)',
})

export const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',
  justifyContent: 'space-around',
  maxWidth: 1280,
  position: 'relative',

  '> button': {
    display: 'flex',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },

  '> nav': {
    display: 'flex',
    alignItems: 'start',
    gap: '0.5rem',
    backgroundColor: '$pink700',
    padding: '1rem 0.7rem',
    position: 'absolute',
    left: '2rem',
    top: '1.5rem',
    borderRadius: 8,
    animation: `${leftRight} 0.2s linear`,
    zIndex: '2',

    button: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
    },

    ul: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.2rem',
      left: '-5rem',
      top: '-1.5rem',
    },

    'ul li': {
      listStyle: 'none',
      textDecoration: 'none',

      a: {
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '$pq',
        color: '$gray300',
      },
    },
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #6A9CDE 0%, #F28DB2 100%)',
    padding: '0.2rem 1rem',
    borderRadius: '20px 0',
    fontFamily: 'Pacifico, sans-serif',
    color: '$gray300',
    gap: '0.3rem',
  },
})

export const AboutContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'center',

  strong: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '$lg',
  },

  span: {
    fontFamily: 'Pacifico, sans-serif',
  },
})
