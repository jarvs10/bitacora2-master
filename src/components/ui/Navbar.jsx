'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className='flex justify-between items-center px-8 py-3 border-b-2 border-gray-400'>
      <Link className={pathname === '/' ? 'font-bold underline underline-offset-4 decoration-4 decoration-sky-600 text-lg' : 'font-bold text-lg'} href={'/'} passHref>
        <Image className='w-10' src={'/img/task.png'} width={100} height={100} alt='icon' />
      </Link>

      <div className='flex gap-6'>
        <Link className={pathname === '/login' ? 'font-bold underline underline-offset-4 decoration-4 decoration-sky-600 text-lg' : 'font-bold text-lg'} href={'/login'} passHref>
          <Image className='w-10' src={'/img/avatar.png'} width={100} height={100} alt='icon' />
        </Link>
        
      </div>
      
    </nav>
  )
}

export default Navbar