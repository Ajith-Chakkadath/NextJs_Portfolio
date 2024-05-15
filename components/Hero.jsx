import React from 'react'

import Link from 'next/link'
import { Button } from './ui/button'
import { Download , Send } from 'lucide-react'

import {RiBriefcase4Fill , RiTeamFill ,RiTodoFill , RiArrowDownSLine} from 'react-icons/ri'


import DevImg from './DevImg'
import Socials from './Socials'
import Badge from './Badge'

const Hero = () => {
  return (
   <section className='py-12 xl:py-24 h-[84vh] xl:pt-28  bg-no-repeat bg-bottom bg-cover dark:bg-none'>
       <div className="container mx-auto">
           <div className=" flex justify-between gap-x-8">
               <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                   <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px'>
                       Web Developer 
                   </div>
                   <h1 className='h1 mb-4'>Hello , my name is Ajith C</h1>
                   <p className='subtitle max-w-[490'>
                   Specializing in eCommerce, landing pages, and portfolio sites, I create responsive, SEO-friendly solutions that drive growth.
                   </p>
                   <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                       <Link href='/contacts'>
                       <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
                       </Link>
                       <Button variant='secondary' className='gap-x-2'>Download CV <Download size={18}/></Button>
                      
                   </div>
                   <Socials containerStyles ='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
               </div>
               <div className="hidden xl:flex relative">
                   {/* Badge 1*/}
                   <Badge containerStyles='absolute top-[25%] -left-[6rem] border' icon={<RiBriefcase4Fill />} endCountNum={1} badgeText='Year Of Experience' />
                  {/* Badge 2*/}
                  <Badge containerStyles='absolute top-[65%] -left-[6rem] border' icon={<RiTodoFill />} endCountNum={2}  badgeText='Finished Projects' />
                        {/* Badge 3*/}
                        <Badge containerStyles='absolute top-[45%] -left-[6rem] border' icon={<RiTeamFill />} endCountNum={2}  badgeText='Happy Clients' />
                  
                   {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div> */}
                   <DevImg containerStyles=' w-[510px] h-[462px] bg-no-repeat relative bg-bottom'imgSrc='/hero/work.png'/>
               </div>
           </div>
           <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
               <RiArrowDownSLine className='text-3xl text-primary' />
           </div>
       </div>
   </section>
  )
}

export default Hero