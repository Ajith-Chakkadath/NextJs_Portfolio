'use client'


import Link from 'next/link'
import { Button } from './ui/button'

import {Swiper ,SwiperSlide} from 'swiper/react'


import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules'

import ProjectCard from './ProjectCard';


const projectData = [
    {
        image:'/work/food.png',
        category : 'react js',
        name : 'Omni Food Products',
        description: 'Explore our React-designed hotel menu website: sleek, user-friendly, and perfect for showcasing culinary offerings with style',
        link : '/',
        github:'/'
    },
    {
        image:'/work/jio.png',
        category : 'react js',
        name : 'Jio Clone',
        description: 'Experience our Jio website crafted in React: sleek design, seamless navigation, and optimized for user ease.',
        link : '/',
        github:'/https://github.com/Ajith-Chakkadath/Clone-jio-website'
    },
    {
        image:'/work/aadhya.png',
        category : 'react js',
        name : 'AAdhya Holidays',
        description: ' Discover our holiday site: Find and compare package deals with prices, all designed for your convenience.',
        link : '/www.aadhya.com',
        github:'/'
    },
    {
        image:'/work/1.png',
        category : 'full stack',
        name : 'Ecommerce',
        description: 'Explore our MERN stack-based eCommerce platform: seamless shopping, secure payments, and a user-friendly experience.',
        link : '/',
        github:'/https://github.com/Ajith-Chakkadath/Ecome-contextAPI'
    },
  
]

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48 '>
        <div className="container mx-auto ">
            {/*text*/}
            <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
                <h2 className='section-title mb-4'>Latest projects</h2>
                <p className='subtitle mb-8'>Explore my curated portfolio showcasing innovative eCommerce platforms, dynamic landing pages, and professional portfolio sites, each crafted with precision to drive user engagement and success</p>
                <Link href='/projects'> <Button>All projects</Button></Link>
            </div>
            {/*Slider*/}
            <div className="xl:max-w-[950px] xl:absolute right-0 top-0">
                <Swiper className='h-[500px] ' slidesPerView={1} breakpoints={{640:{slidesPerView:2}}} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
                    {projectData.slice(0,4).map((project ,index)=>{
                        return( <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    )})}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work