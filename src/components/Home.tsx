import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('אני מופיע בדף הבית')
    return () => {
      console.log('אני יוצא מדף הבית')
    }
  }, [])
  return (
    <div>יתרה בחשבון...</div>
  )
}
