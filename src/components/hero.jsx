import React from 'react'
import { discount, robot } from '../assets'
import styles from '../style'

const Hero = () =>  (
  <section id='home' className={`flex md:flex-row
   flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexstart}
    flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex lex-row items-center py-[6px]
        px-4 bg-discount-gradient rounded-[10px] mb-2'>
            <img src={discount} alt='discount' 
            className='w-[32px] h-[32px]' />
            <p className={`${(styles.paragraph)}`}>
                <span className='text-white'>20%</span>Discount for (" ")
                <span className='text-white'>1 Month</span>
                Account
            </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full' >
            <h1>The Next Payement Method</h1>
        </div>
    </div>
   </section> 
)


export default Hero