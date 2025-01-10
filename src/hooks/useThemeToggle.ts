import { useEffect, useState } from 'react'

export const useThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const currentTheme = document.body.classList.contains('light') ? true : false
    setIsDarkMode(currentTheme)
  }, [])

  const toggleTheme = () => {
    if (document.body.classList.contains('light')) {
      setIsDarkMode(true)
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      setIsDarkMode(false)
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }

  return { isDarkMode, toggleTheme }
}
