import React from 'react'
import{BsWhatsapp} from 'react-icons/bs'
import {AiFillLinkedin,AiFillGithub}from 'react-icons/ai'


const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
        <a href='www.linkedin.com/in/michał-walczak-61a22823a'><AiFillLinkedin/></a>
    </div>
    <div>
       <a href="https://api.whatsapp.com/send/?phone=48884837792&text&type=phone_number&app_absent=0"><BsWhatsapp/></a>
    </div>
    <div>
       <a href="https://github.com/micwalczak"><AiFillGithub /></a> 
    </div>
    </div>
  )
}

export default SocialMedia
