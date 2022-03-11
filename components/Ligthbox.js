import Image from 'next/image';
import React from 'react';
import SimpleReactLightbox, { SRLWrapper, useLightbox } from 'simple-react-lightbox';

export default function ImagestList({
  defaul, Foto}) {

    // let itemImage = [];
    // let ad = []
    // itemImage = Foto.push({pic: defaul})
    // itemImage.map((item, index) => (
    //   ad.push(item)
    // ))
    // console.log( itemImage, ad)
    Foto.push({pic: defaul})
    
    console.log(Foto);

    const { openLightbox } = useLightbox()
    
    
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        
          {Foto.map((item, index) => (
            
              <Image
                layout='fill'
                src={"/img/" + item.pic}
                alt={item.pic}
                key={index}
                // className=' hidden'
              />
            
          ))}
          <button onClick={() => openLightbox()}>
            Open the lightbox
          </button>
      </SRLWrapper>
      
    </SimpleReactLightbox>
    );
}

const itemData = [
  {
    img: '/img/living.jpg',
    title: 'Breakfast',
  },
  {
    img: '/img/logo.png',
    title: 'Breakfast',
  },
  {
    img: '/img/living.jpg',
    title: 'Breakfast',
  },
  {
    img: '/img/log.png',
    title: 'Breakfast',
  }
];