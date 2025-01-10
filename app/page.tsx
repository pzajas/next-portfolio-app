'use client'

import { AnimatedHeader } from '@/components/animations/AnimatedHeader'
import { AnimatedName } from '@/components/animations/AnimatedName'
import { AnimatedSubheader } from '@/components/animations/AnimatedSubheader'
import { DisplacementSphere } from '@/components/displacement/displacement-sphere'
import { ScrollIndicator } from '@/components/indicators/ScrollIndicator'
import SwipeIndicator from '@/components/indicators/SwipeIndicator'
import { HamburgerMenu } from '@/components/menus/HamburgerMenu'
import { VerticalMenu } from '@/components/menus/VerticalMenu'
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
    <main className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>

      <DisplacementSphere />

      <div className="flex flex-col h-screen w-full sm:w-[50%] mx-auto justify-between sm:items-center sm:text-center relative p-4 pb-8 z-50">
        <div></div>
        <div className="items-start justify-start text-left">
          <div className="mb-3 sm:mb-6 md:mb-7 lg:mb-10 xl:mb-12">
            <AnimatedName />
          </div>
          <div>
            <AnimatedHeader />
            <AnimatedSubheader />
          </div>
        </div>

        <div className="flex justify-center items-center animate-bounce">
          {isSmallScreen ? <SwipeIndicator /> : <ScrollIndicator />}
        </div>
      </div>

      <HamburgerMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSmallScreen={isSmallScreen} />
      <VerticalMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSmallScreen={isSmallScreen} />
    </main>
  )
}
