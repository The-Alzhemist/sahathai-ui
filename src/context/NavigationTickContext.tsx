'use client'

import { createContext, useCallback, useContext, useState } from 'react'

const NavigationTickContext = createContext({
  tick: 0,
  bumpTick: () => {},
})

export function NavigationTickProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [tick, setTick] = useState(0)
  const bumpTick = useCallback(() => setTick(t => t + 1), [])

  return (
    <NavigationTickContext.Provider value={{ tick, bumpTick }}>
      {children}
    </NavigationTickContext.Provider>
  )
}

export const useNavigationTick = () => useContext(NavigationTickContext)
