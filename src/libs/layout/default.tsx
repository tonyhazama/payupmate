import React from 'react'
import { Navbar } from '../components/navbar'

export const DefaultLayout = ({ children, ...rest }: any) => {
  return (
    <div className='container' {...rest}>
      <Navbar />
      <div className='py-32'>
        {children}
      </div>
    </div>
  )
}
