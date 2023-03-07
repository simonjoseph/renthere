import React from 'react'
import FooterItem from './FooterItem'
import {Explorar,PoliticaDePivacidade,ApoioSuporte,Alugaqui} from "../data/FooterData";

export default function ItemFooter() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 
      sm:px-8 px-5 py-16 max-w-7xl my-auto mx-0'>
      <FooterItem Links={Alugaqui} title="Alugaqui" />
      <FooterItem Links={PoliticaDePivacidade} title="Politica De Pivacidade" />
      <FooterItem Links={ApoioSuporte} title="Apoio, Suporte" />
      <FooterItem Links={Explorar} title="Explorar" />
    </div>
  )
}
