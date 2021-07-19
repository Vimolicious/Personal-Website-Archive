// Imports
import React, { useEffect, useReducer } from 'react'

// Theme Context
const store = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
})

const { Provider } = store

export default store

// Theme provider
function ThemeProvider({ children }) {
  const setTheme = theme => {
    document.getElementsByTagName('body')[0].classList = [theme]

    localStorage.setItem('theme', JSON.stringify(theme))
  }

  const getTheme = () => {
    const localStorageTheme = JSON.parse(localStorage.getItem('theme'))

    if (
      !localStorageTheme ||
      (localStorageTheme !== 'light' && localStorageTheme !== 'dark')
    ) {
      const prefersDarkTheme =
        window.matchMedia('(prefers-color-scheme: dark)').matches === true

      return prefersDarkTheme ? 'dark' : 'light'
    }

    return localStorageTheme
  }

  const [store, dispatch] = useReducer(
    ({ theme }, action) => {
      switch (action.type) {
        case 'toggle':
          const newTheme = theme === 'light' ? 'dark' : 'light'

          setTheme(newTheme)

          return { theme: newTheme }
        case 'light':
          setTheme('light')

          return { theme: 'light' }
        case 'dark':
          setTheme('dark')

          return { theme: 'dark' }
        default:
          throw new Error('Invalid dispatch type')
      }
    },
    {
      theme: getTheme(),
    }
  )

  useEffect(() => {
    dispatch({ type: store.theme })
  }, [store.theme])

  return <Provider value={{ store, dispatch }}>{children}</Provider>
}

export { ThemeProvider }
