import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import figlet from '../node_modules/figlet'
import standard from '../node_modules/figlet/importable-fonts/Standard.js'
import { useEffect, useState } from 'react'
import Figlet from '../components/Figlet/Figlet'

export default function Home() {
  const [displayNum, setDisplayNum] = useState(0)
  const [intId, setIntId] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  const textArray = [
    'Pizza in the morning',
    'the morning Pizza in',
    'morning pizza in the',
    "Pizza in the evenin'",
    "the evenin' pizza at",
    "evenin' pizza at supper",
    'Pizza at supper time!',
    'supper time! when',
    "time When pizza's on a bagel",
    "when pizza's on a",
    "pizza's on a bagel",
    'on a bagel you can eat pizza',
    'bagel you can eat pizza',
    'You can eat pizza anytime!',
    'eat pizza anytime !!!!!!!!!!!!!!!!!',
    'anytime! !!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!! pizza in',
    '!!!!!!!!!!!!!!!!! pizza in the'
  ]

  return (
    <div className={styles.home}>
      <div className={styles.home_Inner}>
        <img className={styles.home_InnerImage} src='/computer_screens.jpeg' />
        <div className={styles.home_InnerFiglet}>
          <Figlet string={textArray[count % textArray.length]} />
        </div>
        <div className={styles.home_InnerFiglet2}>
          <Figlet string={textArray[count % textArray.length]} />
        </div>
      </div>
    </div>
  )
}
