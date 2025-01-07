import { katakana } from '@/src/constants/strings'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const shuffleGlyphs = (glyphs: string[]) => {
  const shuffled = [...glyphs]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const AnimatedName = () => {
  const name = 'PIOTR ZAJAS'
  const [shuffledName, setShuffledName] = useState(name.split(''))
  const [isShuffling, setIsShuffling] = useState(false)

  useEffect(() => {
    const shuffleLetters = async () => {
      setIsShuffling(true)
      await Promise.all(
        name.split('').map((letter, index) => {
          return new Promise<void>((resolve) => {
            const shuffleCount = 2 * (index + 1)
            const shuffledGlyphsArr = shuffleGlyphs(katakana)
            let currentShuffle = 0

            const shuffleInterval = setInterval(() => {
              setShuffledName((prev) => {
                const newName = [...prev]
                newName[index] = shuffledGlyphsArr[currentShuffle]
                return newName
              })
              currentShuffle++
              if (currentShuffle >= shuffleCount) {
                clearInterval(shuffleInterval)
                setShuffledName((prev) => {
                  const newName = [...prev]
                  newName[index] = letter
                  return newName
                })
                resolve()
              }
            }, 75)
          })
        })
      )
    }

    shuffleLetters()
  }, [name])

  return (
    <motion.p className="text-[#a1a1a1] text-[1.2rem] font-semibold tracking-tight">
      {!isShuffling
        ? ' '
        : shuffledName.map((letter, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                width: '1.5ch',
                textAlign: 'center',
                letterSpacing: '0.1ch'
              }}
            >
              {letter}
            </span>
          ))}
    </motion.p>
  )
}
