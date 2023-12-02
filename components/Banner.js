import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xlg:h-[600px]
        xlg:h-[700px]'
    >
        <Image 
            className='object-cover'
            src={'https://animationvisarts.com/wp-content/uploads/2017/05/airbnb-banner.jpg'}
            layout='fill'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-xl sm:text-2xl w- text-white'>Not sure where to go? Perfect.</p>
            <button className='text-red-400 bg-white px-10 py-4
                shadow-md rounded-full font-bold my-3 hover:shadow-xl
                active:scale-90 transition duration-150'
            >Explore</button>
        </div>
    </div>
  )
}

export default Banner