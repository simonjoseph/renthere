import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {FiLock, FiLogIn, FiMail} from 'react-icons/fi'

function forgot() {
  return (
    <div>
      <Head>
        <title>Aluga Aqui</title>
        <link rel="icon" href="/img/logo.ico" />
      </Head>
      <main>
        <div className=' h-screen flex items-stretch '>
        <div className=' flex place-content-center flex-col w-screen max-w-[700px]
          bg-[#ffffff]'>
          <Image src="/img/logo.png"
            width="100px"
            height="100px"
            objectFit="contain"
            objectPosition="center"
          />

          <form  className=' my-20 mx-auto w-[340px] text-center'>
            <h1 className=' mb-6'>Recuperar senha</h1>
            <div className=' flex items-center bg-[#f5f4f0] border-2 rounded-[10px]
              border-gray-400  p-2 w-full' >
              <FiMail className='mr-2 ' />
              <input className='flex-1 bg-transparent border-0 
                focus:ring-transparent' type="email" placeholder='E-mail' />
            </div>
            
            <button className=' bg-[#00af9e] border-0 rounded-[10px]
              border-gray-400 text-white px-4 w-full mt-4 font-bold h-14 transition : ;
              hover:brightness-90 ' type='submit'>Recuperar</button>
            
          </form>

          <Link href="signup" >
            <a href="" className='mx-auto mt-4 flex items-center text-[#00af9e] 
              transition hover:brightness-90' >
              <FiLogIn className='mr-4' /> 
              Voltar ao login
            </a>
          </Link>
        </div>
        <div className='flex-1 '>
          <img className=' bg-cover w-[55vw] h-[100vh]' src="/img/login.jpg" alt="" />
        </div>
      </div>
    </main>
  </div>
  )
}

export default forgot;
