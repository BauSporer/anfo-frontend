import React from 'react'
import Image from 'next/image';


export const Header = () => {
  return (
    <div className='bg-blue-500 h-10'>
      <Image src="/window.svg" width={50} height={200} alt={'Window'} />
    </div>
  )
}
