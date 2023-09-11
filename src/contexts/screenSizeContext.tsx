import { ReactNode, createContext, useEffect, useState } from 'react'

interface ScreenSizeContextProviderProps {
  children: ReactNode
}

interface ContextProps {
  isScreenMobile: boolean
}

export const ScreenSizeContext = createContext({} as ContextProps)

export function ScreenSizeProvider({
  children,
}: ScreenSizeContextProviderProps) {
  const [isScreenMobile, setIsScreenMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsScreenMobile(window.innerWidth < 700)
    }

    const handleWindowResize = () => {
      setIsScreenMobile(window.innerWidth < 700)
    }
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <ScreenSizeContext.Provider value={{ isScreenMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  )
}
