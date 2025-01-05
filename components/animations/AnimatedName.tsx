import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

//prettier-ignore
const glyphs = [
  'ア', 'イ', 'ウ', 'エ', 'オ',
  'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ',
  'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ',
  'ヤ', 'ユ', 'ヨ', 'ー',
  'ラ', 'リ', 'ル', 'レ', 'ロ',
  'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
  'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
  'バ', 'ビ', 'ブ', 'ベ', 'ボ',
  'パ', 'ピ', 'プ', 'ペ', 'ポ'
]

const shuffleGlyphs = (glyphs) => {
  const shuffled = [...glyphs]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const AnimatedName = () => {
  const name = 'PIOTR ZAJAS'
  const [shuffledName, setShuffledName] = useState(name.split(''))
  const [isShuffling, setIsShuffling] = useState(false)

  useEffect(() => {
    const shuffleLetters = async () => {
      setIsShuffling(true) // Start the shuffling process
      await Promise.all(
        name.split('').map((letter, index) => {
          return new Promise<void>((resolve) => {
            const shuffleCount = 2 * (index + 1)
            const shuffledGlyphsArr = shuffleGlyphs(glyphs)
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
                  newName[index] = letter // Set the final letter after shuffle
                  return newName
                })
                resolve() // Resolve when finished
              }
            }, 75)
          })
        })
      )
    }

    shuffleLetters()
  }, [name]) // Adding 'name' as a dependency so the effect runs when name changes

  return (
    <motion.p className="text-[#a1a1a1] text-[1.2rem] font-semibold tracking-tight">
      {!isShuffling
        ? ' ' // Hide the name initially when shuffling is not started
        : shuffledName.map((letter, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-block', // Ensure each letter is inline-block
                width: '1.5ch', // Set a fixed width for all letters
                textAlign: 'center', // Center-align the letters
                letterSpacing: '0.1ch' // Adjust spacing between characters
              }}
            >
              {letter}
            </span>
          ))}
    </motion.p>
  )
}

export default AnimatedName
