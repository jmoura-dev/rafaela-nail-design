import { keyframes, styled } from '..'

const lowOpacity = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const ClientsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem auto',
  textAlign: 'center',
  width: '100%',
  padding: '0 1rem',
  maxWidth: 1280,

  animation: `${lowOpacity} 0.4s linear`,

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    fontFamily: 'Pacifico',
    fontSize: '$pq',
    listStyle: 'none',
    appearance: 'none',
    textDecoration: 'none',
    color: '$gray700',
    marginBottom: '2rem',
  },

  '> h2': {
    borderBottom: '1px solid $blue700',
    paddingBottom: '0.5rem',
    marginBottom: '0.5rem',
    color: '$gray300',
  },

  '> footer': {
    backgroundColor: '$pink300',
    padding: '1rem',
    borderRadius: 8,
    textAlign: 'center',
    marginTop: '2rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
    transition: 'scale 0.2s ease',

    p: {
      fontSize: '$pq',
      color: '$gray700',
    },
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

export const MainMobile = styled('main', {
  display: 'flex',
  gap: '1rem',
  maxWidth: 300,
  flexWrap: 'nowrap',
  overflowX: 'auto',
  margin: '0 auto',
  minHeight: 290,

  '&::-webkit-scrollbar': {
    backgroundColor: 'none',
    width: '0.7rem',
    height: '0.5rem',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$pink500',
    borderRadius: '1rem',
  },

  '@media (min-width: 700px)': {
    minHeight: 390,
    maxWidth: 600,
  },

  img: {
    borderRadius: 8,
  },
})

export const MainDesktop = styled('main', {
  display: 'flex',
  gap: '1rem',
  maxWidth: 600,
  flexWrap: 'nowrap',
  overflowX: 'auto',
  margin: '0 auto',
  minHeight: 390,

  '&::-webkit-scrollbar': {
    backgroundColor: 'none',
    width: '0.7rem',
    height: '0.5rem',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$pink500',
    borderRadius: '1rem',
  },

  img: {
    borderRadius: 8,
  },
})

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
})
