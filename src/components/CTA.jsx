import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () =>  (
   <section className={`${styles.flexCenter} ${styles.marginY}
   ${styles.padding} sm:flex-row flex-col bg-black-gradient-2
   rounded-2[20px] box-shadow`}>
    <div>
      <h2>Let's try our service now</h2>
      <p>Everything you need to accept card payements
        and grow your business anywhre on the planet.

      </p>
    </div>
    <div>
      <Button />
    </div>
   </section> 
  )

export default CTA
