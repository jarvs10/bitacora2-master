'use client'

import MainWindow from "@/components/MainWindow"
import Aside from "@/components/ui/Aside"

export default function Home() {
  return (
    <div className='md:flex md:min-h-screen'>
      <Aside />

      <div className='md:w-4/5 md:h-screen overflow-scroll bg-gray-50'>
        <MainWindow />
      </div>
    </div>
  )
}
