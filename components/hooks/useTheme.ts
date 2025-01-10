import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const getCurrentTheme = () => {
      if (document.body.classList.contains('light')) {
        return 'light'
      } else if (document.body.classList.contains('dark')) {
        return 'dark'
      }
      return ''
    }

    setTheme(getCurrentTheme())
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(newTheme)
    setTheme(newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}

export default useTheme
