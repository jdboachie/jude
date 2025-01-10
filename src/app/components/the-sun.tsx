'use client';
import { getHours } from 'date-fns'
import styles from './the-sun.module.css'
import React from 'react';

function TheSun() {

  const [bottom, setBottom] = React.useState<string>('')
  const [moonIsVisible, setMoonIsVisible] = React.useState<'hidden' | 'visible'>('hidden')
  const [sunIsVisible, setSunIsVisible] = React.useState<'hidden' | 'visible'>('hidden')

  React.useEffect(() => {
    const hour = getHours(new Date())
    if (hour < 6 || hour > 19) {
      setMoonIsVisible('visible')
    } else {
      setSunIsVisible('visible')
      if (hour.toString() === '12' || hour.toString() === '13') {
        setBottom(`calc(100dvh - 40px)`)
      } else if (hour.toString() === '11' || hour.toString() === '14') {
        setBottom(`calc(83.3333dvh - 40px)`)
      } else if (hour.toString() === '10' || hour.toString() === '15') {
        setBottom(`calc(66.6666dvh - 40px)`)
      } else if (hour.toString() === '9' || hour.toString() === '16') {
        setBottom(`calc(49.999999dvh - 40px)`)
      } else if (hour.toString() === '8' || hour.toString() === '17') {
        setBottom(`calc(33.33333dvh - 40px)`)
      } else if (hour.toString() === '7' || hour.toString() === '18') {
        setBottom(`calc(16.6666dvh - 40px)`)
      } else if (hour.toString() === '6' || hour.toString() === '19') {
        setBottom(`calc(40px)`)
      } else {
        alert('none')
      }
    }
  }, []);


  return (
    <>
      <div style={{ bottom: bottom, visibility: sunIsVisible }} className={styles.sun} />
      <div style={{ visibility: moonIsVisible }} className={styles.moon} />
    </>
  )
}

export default TheSun