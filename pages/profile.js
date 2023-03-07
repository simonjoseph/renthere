import { CameraIcon, UploadIcon } from '@heroicons/react/outline'
import {FiLock, FiLogIn, FiMail} from 'react-icons/fi'
import Image from 'next/image'
import React, { useCallback } from 'react'
import Nav from '../components/Nav';
import Banner from '../components/Banner';

export default function profile() {
  const handleAvatarChange = useCallback((e) => {
    if(e.target.files){
      console.log(e.target.files[0]);
    }
  }, []);
  return (
    <>
    <Nav test={"test"} />
    <div className='relative pb-2 h-full justify-center'>
        <div className="flex flex-col pb-5">
          <div className="relative flex flex-col mb-7">
            <div className="flex flex-col justify-center items-center">
              <img src="img/living-room.jpg" 
              className='w-full h-[370px] 2xl:h-[510px] shadow-lg object-cover' 
              alt="banner-pic" />

              {/* <img className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover'
                src='img/living.jpg'
                alt='user-pic'
              /> */}
              
              <main className=" max-w-6xl mx-auto sm:px-6 lg:px-8">
    <form className='  mx-auto py-24 -mt-40'>
        <div action="" className=' '>
          <div className="relative mx-auto my-0 mb-[-40px] text-center h-[186px] w-[186px] 
            ">
            <Image
              src="/img/living.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-[50%] "
            />
            <label htmlFor='avatar' className=' absolute w-12 h-12 p-2 bg-[#00af9e] 
              rounded-full right-0 bottom-0 lg:right-[-10px] lg:bottom-[-10px] cursor-pointer' 
              >
              <CameraIcon className='text-white' />
            <input type="file" className=' hidden' id="avatar" onChange={handleAvatarChange} />
            </label>
          </div>
        </div>
        <div className=" ">
          <div className=" w-[340px] mx-auto rounded-lg" >
            <h1 className=' mb-6 text-center'>Meu Perfil</h1>
            <div className=' flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
              border-gray-400  p-2 w-full' >
              <FiMail className='mr-2 ' />
              <input className='flex-1 bg-transparent border-0 
                focus:ring-transparent' type="email" placeholder='E-mail' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <button className=' bg-[#00af9e] border-0 rounded-[10px]
              border-gray-400 px-4 w-full mt-4 text-white font-bold h-14 transition : ;
              hover:brightness-90 ' type='submit'>Entar</button>
          </div>
        </div>
      </form>
    </main>
            </div>
          </div>
        </div>
      </div>
    
    {/* <div className=" h-screen">
      <Image src="/img/living-room.jpg" 
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="banner"
        className="filter brightness-50"
      />
    </div> */}

    {/* <main className=" max-w-6xl mx-auto sm:px-6 lg:px-8">
    <form className='  mx-auto py-24'>
        <div action="" className=' '>
          <div className="relative mx-auto my-0 mb-[-40px] text-center h-[186px] w-[186px] 
            ">
            <Image
              src="/img/living.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-[50%] "
            />
            <label htmlFor='avatar' className=' absolute w-12 h-12 p-2 bg-yellow-700 
              rounded-full right-0 bottom-0 lg:right-[-10px] lg:bottom-[-10px] cursor-pointer' 
              >
              <CameraIcon />
            <input type="file" className=' hidden' id="avatar" onChange={handleAvatarChange} />
            </label>
          </div>
        </div>
        <div className=" ">
          <div className=" w-[340px] mx-auto rounded-lg" >
            <h1 className=' mb-6 text-center'>Meu Perfil</h1>
            <div className=' flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
              border-gray-400  p-2 w-full' >
              <FiMail className='mr-2 ' />
              <input className='flex-1 bg-transparent border-0 
                focus:ring-transparent' type="email" placeholder='E-mail' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <div className='flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
            border-gray-400 p-2 w-full mt-2'>
              <FiLock className='mr-2' />
              <input className=' flex-1 bg-transparent border-0 
                focus:ring-transparent ' type="password"
              placeholder='Senha' />
            </div>
            <button className=' bg-[#c2a895] border-0 rounded-[10px]
              border-gray-400 px-4 w-full mt-4 font-bold h-14 transition 
              hover:brightness-90 ' type='submit'>Entar</button>
          </div>
        </div>
      </form>
    </main> */}
    </>
  )
}
