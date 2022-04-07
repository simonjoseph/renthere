import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import { LocationMarkerIcon, PhoneIcon, MailIcon, CheckCircleIcon } from '@heroicons/react/outline'


export default function UserProfile() {
  const item = {
    "id": 1,
      "titlo": "Apartamento T3",
      "Provincia": "Luanda",
      "Bairro": "Palanca",
      "Rua": "G",
      "Casa": "9",
      "Telefone": 945598299,
      "Modalidade": "Comprar",
      "Valor": 500.000,
      "Quarto": "3",
      "Sala": "1",
      "Banheiro": "1",
      "Area": "1m2",
      "defaul": "LundanorteDundo.jpg",
      "Foto": [
        {
          "pic": "lundanorte.jpg"
        },
        {
          "pic": "benguela.jpg"
        },
        {
          "pic": "living.jpg"
        },
        {
          "pic": "living-room.jpg"
        }
      ]
  }
  return (
    <>
    <Nav test={"test"}/>
      <div className='relative pb-2 h-full justify-center'>
        <div className="flex flex-col pb-5">
          <div className="relative flex flex-col mb-7">
            <div className="flex flex-col justify-center items-center">
              <img src="img/living-room.jpg" 
              className='w-full h-[370px] 2xl:h-[510px] shadow-lg object-cover' 
              alt="banner-pic" />

              <img className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover'
                src='img/living.jpg'
                alt='user-pic'
              />
              <h1 className='font-bold text-3xl text-center mt-3'>
                Gypsie Bambu
              </h1>
              <div className="grid gap-[1.5rem] grid-cols-3 mt-[1rem]">

              <div >
                  <p className='mb-[.25rem] '>
                  <LocationMarkerIcon className='w-[20px] my-[0] mx-[auto]'/>
                  </p>
                <p className='mb-[.25rem] text-center'>palanca, Luanda</p>
              </div>

              <div >
                <p className='mb-[.25rem]'>
                  <PhoneIcon className='w-[20px] my-[0] mx-[auto]' />
                </p>
                <p className='mb-[.25rem] text-center'>+244 939 495 934</p>
              </div>
              <div >
                <p className='mb-[.25rem] '>
                  <MailIcon className='w-[20px] my-[0] mx-[auto]'/>
                </p>
                <p className='mb-[.25rem] text-center'>test@test.com</p>
              </div>
              </div>

              <div className='flex'>
                <h1  className='text-[green]'>Verificação: </h1>
                <CheckCircleIcon className='w-[20px] text-[green]'/>
              </div>

              <h1>Propriedades listadas</h1>
              <div className="flex space-x-3 overflow-scroll p-3 -ml-3 scrollbar-hide">
                <Card dados={item}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
