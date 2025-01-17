'use client'
import React from 'react'

import { RiYoutubeFill , RiLinkedinFill,RiGithubFill,RiInstagramFill} from 'react-icons/ri'
import Link from 'next/link'

const icons =[ 
  {path : '/' , name: <RiYoutubeFill />},
  {path : 'https://www.linkedin.com/in/ajith-chakkadath/' , name: <RiLinkedinFill />},
  {path : 'https://github.com/Ajith-Chakkadath' , name: <RiGithubFill />},
  {path : '/' , name: <RiInstagramFill/>}
]

const Socials = ({containerStyles , iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon , index) =>{
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials

