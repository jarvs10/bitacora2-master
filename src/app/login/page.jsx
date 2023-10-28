'use client'
import Aside from '@/components/ui/Aside'
import React from 'react'

const Login = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <Aside />

      <div className='md:w-3/4 md:h-screen overflow-scroll'>
        <h1>Login</h1>
      </div>
    </div>
  )
}

export default Login