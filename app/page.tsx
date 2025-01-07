'use client'

import { AnimatedHeader } from '@/components/animations/AnimatedHeader'
import { AnimatedName } from '@/components/animations/AnimatedName'
import { AnimatedSocialIcons } from '@/components/animations/AnimatedSocialIcons'
import { AnimatedSubheader } from '@/components/animations/AnimatedSubheader'
import { ScrollIndicator } from '@/components/indicators/ScrollIndicator'
import { HamburgerMenu } from '@/components/menus/HamburgerMenu'
import { VerticalMenu } from '@/components/menus/VerticalMenu'
import { HamburgerMenuIcon } from '@/public/icons/HamburgerMenuIcon'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <main className="h-screen bg-[#111111] relative">
      <div className="flex flex-col h-screen w-full sm:w-[50%] lg:w-[50%] m-auto justify-center items-center text-center relative">
        <div className="items-start justify-start text-left">
          <AnimatedName />
          <AnimatedHeader />
          <AnimatedSubheader />
        </div>
      </div>
      <AnimatedSocialIcons />
      <HamburgerMenuIcon setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSmallScreen={isSmallScreen} />
      <HamburgerMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSmallScreen={isSmallScreen} />
      <VerticalMenu />
      <ScrollIndicator />
    </main>
  )
}
