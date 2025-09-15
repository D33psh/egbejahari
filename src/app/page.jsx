import styles from './style.module.css'

import Image from 'next/image'
import Bg from './components/Background.jsx'

export default function Home() {
  return (
    <>
      <Bg className={styles.background} />
    </>
  )
}