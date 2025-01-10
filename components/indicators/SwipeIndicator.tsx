import { IoChevronDown } from 'react-icons/io5'
import useTheme from '../hooks/useTheme'

const SwipeIndicator = () => {
  const { theme } = useTheme()
  return <IoChevronDown size={25} stroke={`${theme === 'light' ? 'black' : 'white'}`} />
}

export default SwipeIndicator
