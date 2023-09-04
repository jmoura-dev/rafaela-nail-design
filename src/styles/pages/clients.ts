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

  animation: `${lowOpacity} 0.4s linear`,
})
