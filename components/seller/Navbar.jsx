import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {

  const { router } = useAppContext()

  const logout = () => {
    router.push('/')
    toast.success('Logged Out')
  }

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <Image className='w-28 lg:w-32 cursor-pointer' src={assets.logo} alt="" />
      <button onClick={logout} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar