'use client'

import { useState } from 'react'
import { PiMoonFill } from 'react-icons/pi'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

export const NavSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinkClass =
    'text-sm sm:text-base md:text-lg cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:transition-all hover:duration-200 hover:origin-left'
  const navItems = ['Home', 'About', 'Projects', 'Contact']

  return (
    <nav className="flex h-16 items-center justify-between px-[10%] md:px-[20%] py-4 text-center font-medium text-white relative">
      <div className="flex w-full items-center justify-between">
        <div className="text-white text-right text-sm sm:text-base md:text-lg">Logo</div>
        <div className="sm:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 size={20} /> : <RxHamburgerMenu size={20} />}
        </div>
      </div>

      <div className="cursor-pointer">
        <PiMoonFill size={25} />
      </div>

      <div
        className={`fixed top-24 right-0 w-32 h-full bg-primary z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300 ease-in-out sm:hidden px-[10%] md:px-[40%]`}
      >
        <div className="flex flex-col items-end justify-start h-full space-y-6">
          {navItems.map((item, index) => (
            <div key={index} className={navLinkClass}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
