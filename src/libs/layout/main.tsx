import React from 'react'
import { Navbar } from '../components/navbar'

export const MainLayout = ({ children, ...rest }: any) => {
  return (
    <div className='relative pt-14' {...rest}>
      <Navbar />
      <div className='container px-4 py-8 lg:px-0 m-auto'>
        {children}
      </div>
    </div>
  )
}
