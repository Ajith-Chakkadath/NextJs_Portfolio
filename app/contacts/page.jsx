

import Form from '@/components/Form'
import { MailIcon,HomeIcon , PhoneCall } from 'lucide-react'

import React from 'react'

const Contact = () => {
  return (
   <section>
     <div className="container mx-auto">
       {/* text&illustation */}
       <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
         {/* text */}
         <div className="flex flex-col justify-center">
         <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
           <span className='w-[30px] h-[2px] bg-primary'></span>
           Say hello 👋 
           </div>
           <h1 className='h1 max-w-md mb-8'>Let's Collaborate.</h1>
           <p className='subtitle max-w-[400px]'>Ready to elevate your online presence? Contact me for top-tier web development services that guarantee stunning, efficient, and user-friendly websites tailored to your needs. Let’s create something impressive together!</p>
         </div>
         {/* illustation */}
         <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
       </div>
       {/* info text & forms */}
       <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
         {/* info text  */}
          <div className=" flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className='text-primary'/>
              <div className="">ajithchakkadath@gmail.com</div>
            </div>
             {/* address */}
             <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className='text-primary'/>
              <div className="">Eravu , Thrissur , Kerala</div>
            </div>
             {/* mail */}
             <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className='text-primary'/>
              <div className="">+91 9188056004</div>
            </div>
          </div>
          <Form />
       </div>
     </div>
   </section>
  )
}

export default Contact