import React from 'react'
export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className='w-full h-fit text-text'>
      <p className='text-center text-sm'>&copy;{currentYear} All rights reserved.</p>
    </div>
  )
}
