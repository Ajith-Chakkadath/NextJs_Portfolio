'use client'

import React , { useState} from 'react'
import { Tabs ,TabsList,TabsContent,TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

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

const uniqueCategories = ['all projects', ...new Set(projectData.map((item)=>item.category))]


const Project = () => {
  const [categories , setCategories] = useState(uniqueCategories)
  const [category,setCategory] = useState('all projects')
  const filteredProjects = projectData.filter(project =>{
    return category === 'all projects' ? project : project.category === category
  })

  console.log(filteredProjects)


  return (
    <section className='min-h-screen pt-12'>
<div className="container mx-auto">
  <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Project</h2>
{/* tabs */}
<Tabs defaultValue={category} className='mb-24 xl:mb-48'>
  <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border:none'>
    {categories.map((category,index)=>{
      return<TabsTrigger  onClick={()=>setCategory(category)}
       value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
    })}
  </TabsList>
  {/* tabs content */}
<div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
  {filteredProjects.map((project, index)=>{
    return(
      <TabsContent value={category} key={index}>
        <ProjectCard project={project} />
      </TabsContent>
    )
  })}
</div>
</Tabs>

</div>
    </section>
  )
}

export default Project