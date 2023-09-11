import { styled, keyframes } from '..'

const lowOpacity = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const ContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1000,
  overflowX: 'hidden',
  overflowY: 'auto',
  margin: '0 auto',
  width: '100%',
  height: '100%',
  animation: `${lowOpacity} 0.4s linear`,

  '> p': {
    display: 'flex',
    alignItems: 'start',
    margin: '2rem auto',
    padding: '1rem',
    gap: '0.5rem',
    textAlign: 'start',

    fontSize: '$pq',
    fontFamily: 'Pacifico',
    fontWeight: '400',
    color: '$blue700',
  },

  img: {
    objectFit: 'cover',
    width: '100%',
    marginTop: '1rem',
    padding: '0.5rem',
  },

  main: {
    display: 'flex',
    padding: '1rem',
    gap: '1rem',
    marginTop: '1rem',

    section: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '0.5rem',

      h2: {
        fontFamily: 'Baloo2',
        fontSize: '$xl',
        fontWeight: 'bold',
        marginBottom: '1rem',
        paddingBottom: '0.3rem',
        width: '8rem',
        color: '$blue700',
        borderBottom: '1px solid $blue500',
      },

      span: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontFamily: 'Roboto',
        fontSize: '$pq',
        color: '$gray500',
      },

      'a:nth-child(2)': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        padding: '0.3rem',
        fontSize: '$pq',
        textDecoration: 'none',
        color: '#E4405F',
        backgroundColor: '$gray300',
        borderRadius: 8,
        width: 115,
        transition: 'scale 0.2s ease-out',

        '&:hover': {
          scale: 1.1,
        },
      },

      'a:nth-child(3)': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        padding: '0.3rem',
        fontSize: '$pq',
        textDecoration: 'none',
        color: '#25D366',
        backgroundColor: '$gray300',
        borderRadius: 8,
        width: 115,
        transition: 'scale 0.2s ease-out',

        '&:hover': {
          scale: 1.1,
        },
      },
    },
  },
})
