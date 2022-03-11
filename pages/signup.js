import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {FiLock, FiLogIn, FiMail} from 'react-icons/fi'

function signup() {


  return (
    <div>
      <Head>
        <title>Aluga Aqui</title>
        <link rel="icon" href="/img/logo.ico" />
      </Head>
      <main>
        <div className=' h-screen flex items-stretch '>
        <div className='flex-1 '>
          {/* <Image className=' bg-cover' src="/img/signIn.jpg" width="100px" height="100vh" /> */}
          <img className=' bg-cover w-[55vw] h-[100vh]' src="/img/sign.jpg" alt="" />
        </div>
        <div className=' flex place-content-center flex-col w-screen max-w-[700px]
          bg-[#ffffff]'>
          <Image src="/img/logo.png"
            width="100px"
            height="100px"
            objectFit="contain"
            objectPosition="center"
          />

          <form  className=' my-20 mx-auto w-[340px] text-center'>
            <h1 className=' mb-6'>Faça seu Cadastro</h1>
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
              placeholder='Password' />
            </div>
            <button className=' bg-[#c2a895] border-0 rounded-[10px]
              border-gray-400 px-4 w-full mt-4 font-bold h-14 transition 
              hover:brightness-90 ' type='submit'>Entar</button>
            
          </form>

          <Link href="signin" >
            <a href="" className='mx-auto mt-4 flex items-center text-[#c2a895] 
              transition hover:brightness-90' >
            <FiLogIn className='mr-4' /> 
              Fazer login
            </a>
          </Link>
        </div>
        
      </div>
    </main>
  </div>
  )
}

export default signup;
