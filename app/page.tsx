'use client'

import { AnimatedHeader } from '@/components/animations/AnimatedHeader'
import { AnimatedName } from '@/components/animations/AnimatedName'
import { AnimatedSubheader } from '@/components/animations/AnimatedSubheader'
import { DisplacementSphere } from '@/components/displacement/displacement-sphere'
import { ScrollIndicator } from '@/components/indicators/ScrollIndicator'
import { SwipeIndicator } from '@/components/indicators/SwipeIndicator'
import { HamburgerMenu } from '@/components/menus/HamburgerMenu'
import { VerticalMenu } from '@/components/menus/VerticalMenu'
import { useState } from 'react'

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="h-screen relative overflow-y-auto no-scrollbar">
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

        <div className="flex justify-center items-center animate-bounce transition-opacity duration-300">
          {isSmallScreen ? <SwipeIndicator /> : <ScrollIndicator />}
        </div>
      </div>

      <HamburgerMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSmallScreen={isSmallScreen} />
      <VerticalMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSmallScreen={isSmallScreen} />
    </main>
  )
}
