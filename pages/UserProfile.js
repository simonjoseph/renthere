import React from 'react'
import Bar from '../components/Bar'
import Card from '../components/Card'

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
    <Bar/>
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
              <p>palanca, Luanda</p>

              <h1>Verificação</h1>

              <div className="flex gap-2">
                <p>número</p>
                <p>email</p>
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
