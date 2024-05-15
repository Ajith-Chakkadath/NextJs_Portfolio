import React from 'react'
import { ShoppingBag , Home ,BriefcaseBusiness } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const servicesData=[
    {
        icon : <BriefcaseBusiness size={72} strokeWidth={0.8} />,
        title : 'Portfolio website',
        description : 'We design engaging and SEO-friendly portfolio websites that effectively showcase your skills and boost your online visibility.'
    },
    {
        icon : <Home size={72} strokeWidth={0.8} />,
        title : 'Landing Page',
        description : 'We create visually striking and effective landing pages that convert visitors into customers'
    },
    {
        icon : <ShoppingBag size={72} strokeWidth={0.8} />,
        title : 'Ecommerce Website',
        description : 'We build intuitive, secure eCommerce websites designed to streamline shopping and boost sales'
    },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
       {/* Grid items*/}
       <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
           {servicesData.map((item,index)=>{
               return(
                   <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                       <CardHeader className='text-primary absolute -top-[60px]'>
                           <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                       </CardHeader>
                       <CardContent className='text-center' >
                           <CardTitle className='mb-4'>{item.title}</CardTitle>
                           <CardDescription className='text-lg' >{item.description}</CardDescription>
                        </CardContent>
                   </Card>
               )
           })}
       </div>
        </div>
    </section>
  )
}

export default Services