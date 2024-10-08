"use client"

import { LoaderCircle } from 'lucide-react'

const loading = () => {
  return (
    <main className='h-screen w-full flex justify-center items-center'>
      <LoaderCircle size={42} className='animate-spin text-white' />
    </main>
  )
}

export default loading