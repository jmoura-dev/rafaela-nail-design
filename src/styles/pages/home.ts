import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem 1rem',
  width: '100%',
  maxWidth: 1280,
  margin: '0 auto',
  position: 'relative',

  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
    gap: '0.5rem',
    zIndex: '1',

    overflow: 'hidden',
    width: '15rem',
    height: '15rem',
    backgroundColor: '$pink300',
    borderRadius: '50%',

    h1: {
      fontSize: '$xl',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: '$gray300',
    },

    p: {
      display: 'flex',
      color: '$gray300',
      fontSize: '0.775rem',
      textAlign: 'center',
    },
  },

  img: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginTop: '-4rem',
    borderRadius: '50%',
    objectFit: 'cover',
    width: '16rem',
    height: '16rem',
  },

  '> a': {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '10%',
    right: '10%',
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
