import { keyframes, styled } from '..'

const lowOpacity = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const ServicesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  maxWidth: 1000,
  overflowX: 'hidden',
  overflowY: 'auto',
  margin: '0 auto',
  width: '100%',
  animation: `${lowOpacity} 0.4s linear`,

  h1: {
    fontFamily: 'Roboto',
    fontSize: '$xl',
    marginBottom: '1.5rem',
    borderBottom: '1px solid $pink300',
    paddingBottom: '0.2rem',
    width: '6rem',
  },

  footer: {
    backgroundColor: '$pink300',
    padding: '1rem',
    borderRadius: 8,
    textAlign: 'center',
    marginTop: '3.5rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
    transition: 'scale 0.2s ease',

    '&:hover': {
      cursor: 'pointer',
      scale: '1.03',
    },

    a: {
      fontSize: '$pq',
      listStyle: 'none',
      appearance: 'none',
      textDecoration: 'none',
      color: '$gray700',
    },
  },
})

export const MainMobile = styled('main', {
  display: 'flex',
  gap: '1rem',
  maxWidth: 300,
  flexWrap: 'nowrap',
  overflowX: 'auto',
  margin: '0 auto',
  minHeight: 300,

  span: {
    fontFamily: 'Pacifico',
    fontSize: '$pq',
    fontWeight: 'bold',
    color: '$blue700',
  },

  img: {
    borderRadius: '5rem 0 5rem 0',
    border: '1px solid $blue500',
  },
})

export const MainDesktop = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '0 auto',
  overflow: 'auto',
  padding: '5rem 0 0 0',

  '&::-webkit-scrollbar': {
    backgroundColor: 'none',
    width: '0.7rem',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$pink500',
    borderRadius: '1rem',
  },

  '> div:nth-child(1)': {
    position: 'relative',
    width: '100%',
    borderRight: '1px solid #000',
    height: 550,

    '> section:nth-child(1)': {
      position: 'absolute',
      top: '0',
      right: '0',

      img: {
        borderRadius: '0 0 0 6rem',
      },
    },

    '> section:nth-child(2)': {
      position: 'absolute',
      bottom: '0',
      right: 0,

      img: {
        borderRadius: '0 0 0 6rem',
      },
    },
  },

  '> div:nth-child(2)': {
    position: 'relative',
    width: '100%',
    height: 550,

    span: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },

    '> section:nth-child(1)': {
      position: 'absolute',
      top: '18%',
      left: 0,

      img: {
        borderRadius: '0 0 6rem 0',
      },
    },

    '> section:nth-child(2)': {
      position: 'absolute',
      bottom: '-20%',
      left: 0,

      img: {
        borderRadius: '0 0 6rem 0',
      },
    },
  },

  span: {
    fontFamily: 'Pacifico',
    fontSize: '$pq',
    fontWeight: 'bold',
    color: '$blue700',
  },
})

export const NavigationContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',

  a: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Pacifico',
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: '$gray600',

    '&:hover': {
      backgroundColor: '$pink500',
      borderRadius: 6,
    },
  },
})

export const ImageContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  paddingBottom: '0.8rem',
})
