import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () =>  (
   <section className={`${styles.flexCenter} ${styles.marginY}
   ${styles.padding} sm:flex-row flex-col bg-black-gradient-2
   rounded-2[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Let's try our service now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payements
        and grow your business anywhre on the planet.

      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 mt-5 ml-0`}>
      <Button />
    </div>
   </section> 
  )

export default CTA
