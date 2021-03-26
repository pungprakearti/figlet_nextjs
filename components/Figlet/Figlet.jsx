import { useEffect, useState } from 'react'
import figlet from '../../node_modules/figlet'
import standard from '../../node_modules/figlet/importable-fonts/Standard.js'
import cosmike from '../../node_modules/figlet/importable-fonts/Cosmike.js'
import fraktur from '../../node_modules/figlet/importable-fonts/Fraktur.js'
import impossible from '../../node_modules/figlet/importable-fonts/Impossible.js'
import kban from '../../node_modules/figlet/importable-fonts/Kban.js'
import poison from '../../node_modules/figlet/importable-fonts/Poison.js'
import univers from '../../node_modules/figlet/importable-fonts/Univers.js'
import dietCola from '../../node_modules/figlet/importable-fonts/Diet Cola.js'
import styles from './Figlet.module.scss'

const Figlet = (props) => {
  const [asciiArray, setAsciiArray] = useState(false)

  useEffect(() => {
    splitText(props.string)
  }, [props.string])

  const splitText = (text) => {
    const arr = text.split(' ')
    let newArr = []
    arr.forEach((word) => {
      let temp = createText(word)
      newArr.push(temp)
    })

    setAsciiArray(newArr)
  }

  const createText = (text) => {
    let asciiText

    figlet.parseFont('Poison', poison)
 
    figlet.text(text, {
        font: 'Poison',
    }, (err, data) => {
        if(err) {
          console.error(err)
          return false
        }

        asciiText = data
    })

    return asciiText
  }

  return (
    <div className={styles.figlet}>
      <div className={styles.figlet_Ascii}>
        {asciiArray.length > 0 ? (
          asciiArray.map((word, i) => {
            return (
              <pre className={styles.figlet_AsciiWord} key={i}>
                {word}
              </pre>
            )
          })
        ) : (
          <div>
            loading
          </div>
        )}
      </div>
    </div>
  )
}

export default Figlet
