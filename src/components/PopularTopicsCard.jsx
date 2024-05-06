import React from 'react'
import img from '../../public/rocket.png'
import Image from 'next/image'

const PopularTopicsCard = () => {
  return (
    <div className='flex flex-col items-center bg-[#071829] text-white border border-[#425568] max-w-[360px] p-3 rounded-[10px]'>
        <div className='flex items-center justify-between'>
            <div className='w-[40%]'><Image src={img} height={50} width={100} className='object-contain w-full h-full'/></div>
            <div className='w-[60%]'>
                <h1 className='font-extrabold'>Heading</h1>
                <p className='text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt exercitationem architecto quasi? Dolore voluptatibus alias aspernatur soluta. Nemo, quo! Placeat vel consectetur saepe alias sed tempore corporis maiores. Ipsa laboriosam recusa?</p>
            </div>
        </div>
        <div className='w-full mt-3'>
            <button className='w-full border border-[#425568] rounded-[12px] py-3 '>Read more</button>
        </div>
      
    </div>
  )
}

export default PopularTopicsCard
