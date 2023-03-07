import {FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";

import React from 'react'


export default function SocialIcon({Icons}) {
  return (
    <div className='text-teal-500'>
      
        <span  className="p-2 cursor-pointer inline-flex items-center mx-1.5 text-xl rounded-full">
          <FaFacebook />
        </span>
        <span  className="p-2 cursor-pointer inline-flex items-center mx-1.5 text-xl rounded-full">
          <FaInstagram />
        </span>
        <span  className="p-2 cursor-pointer inline-flex items-center mx-1.5 text-xl rounded-full">
          <FaFacebook />
        </span>
        <span  className="p-2 cursor-pointer inline-flex items-center mx-1.5 text-xl rounded-full">
          <FaInstagram />
        </span>
    </div>
    
  )
}
