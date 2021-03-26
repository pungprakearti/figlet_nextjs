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
    }, 250)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  const textArray = [
    
    'Hello friends, this is',
    'friends, this is the future',
    'this is the future!',
    'the future! !!!!!!!!!!!!!!!',
    'future! !!!!!!!!!!!!!!! !!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!! !!!!!!!!!!!!!!! !!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!! !!!!!!!!!!!!!!! !!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!! !!!!!!!!!!!!!!! penis',
    '!!!!!!!!!!!!!!! penis !!!!!!!!!!!!!!!',
    'penis !!!!!!!!!!!!!!! !!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!! !!!!!!!!!!!!!!! Hello',
    '!!!!!!!!!!!!!!! Hello friends,'
  ]
  return (
    <div className={styles.home}>
      <div className={styles.home_Inner}>
        <img className={styles.home_InnerImage} src='/computer_screens.jpeg' />
        <div className={styles.home_InnerFiglet}>
          <Figlet string={textArray[count % textArray.length]} />
        </div>
      </div>
    </div>
  )
}
