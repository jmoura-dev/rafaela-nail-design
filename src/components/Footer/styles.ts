import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  display: 'flex',
  width: '100%',
  background: 'linear-gradient(to right, #EA4A92 0%, #C24D81 100%)',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1280,
    padding: '1rem',
    margin: '0 auto',

    a: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '$blue300',
      border: 'none',
      borderRadius: 6,
      padding: '0.5rem',
      fontFamily: 'Pacifico',
      color: '$gray600',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'background 0.2s ease-out',

      '&:hover': {
        backgroundColor: '$blue500',
      },
    },
  },
})
