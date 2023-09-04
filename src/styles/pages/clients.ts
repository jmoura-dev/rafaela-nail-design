import { keyframes, styled } from '..'

const lowOpacity = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const ClientsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem auto',
  gap: '1rem',
  textAlign: 'center',
  width: '100%',
  padding: '0 1rem',

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
})
