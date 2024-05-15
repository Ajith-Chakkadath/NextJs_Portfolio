


import DevImg from './DevImg'
import Image from 'next/image'
import React from 'react'


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User2,MailIcon, HomeIcon, PhoneCall, GraduationCap, Calender,Briefcase, StepForward } from 'lucide-react'



const infoData =[
    {
        icon: <User2 size={20} />,
        text : 'Ajith Chakkadath'
    },
    {
        icon: <PhoneCall size={20} />,
        text : '9188056004'
    },
    {
        icon: <MailIcon size={20} />,
        text : 'ajithchakkadath@gmail.com'
    },
    {
        icon: <GraduationCap size={20} />,
        text : 'Master on Industial Automation and Robotics'
    },
    {
        icon: <HomeIcon size={20} />,
        text : 'Eravu , Thrissur, Kerala'
    },
    
]

const qualificationData=[
    {
        title : 'education',
        data:[
            {
            college : 'Jyothi Enginner College',
            qualification : "Master of Technology",
            year:'2019-2021'
        },
            {
            college: 'BVRITN',
            qualification : "Bachelor of Technology",
            year:'2014-2019'
        },
         
    ]
    },
    {
        title : 'experience',
        data:[
            {
            company : 'Ocuiz technology',
            jobTitle : "Intern",
            year:'1/2024 - 2/2024'
        },
            {
                company : 'TCS',
                jobTitle : "Assistant System Engineering",
                year:'10/2021 - 10/2023'
        },
         
    ]
    },
]

const skillData = [{
    title : 'skills',
    data:[
        {
            name: "HTML, CSS, JavaScript"
        },
        {
            name: "React, NextJs,"
        },
        {
            name: "Bootstrap, Tailwind CSS"
        },
        {
            name: "NodeJs, ExpressJs,MongoDB"
        },{
            name: "Solidity"
        },{
            name: 'Python, C,C++'
        },

    ]
},{
    title : 'Tools',
    data:[
        {
            imgPath:'/about/vscode.svg'
        },
        {
            imgPath:'/about/figma.svg'
        },
        {
            imgPath:'/about/notion.svg'
        },
        {
            imgPath:'/about/wordpress.svg'
        },
       

    ]
},

]




const About = () => {
    const getData = (arr , title)=>{
        return arr.find((item) => item.title == title)
    }
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className="container mx-auto">
            <h1 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h1>
        <div className="flex flex-col xl:flex-row ">
            <div className="hidden xl:flex flex-1 relative">
                <DevImg containerStyles='  w-[500px] h-[500px] bg-no-repeat relative' imgSrc='/public/developer1.webp'  />
            </div>
            <div className="flex-1"> 
           
            <Tabs defaultValue='personal'>
                <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
           <TabsTrigger className="w-[162px]" value='personal'>Personal Info</TabsTrigger>
           <TabsTrigger className="w-[162px]" value='qualification'>Qualification</TabsTrigger>
           <TabsTrigger className="w-[162px]" value = 'skills'>Skills</TabsTrigger>
                </TabsList>
                <div className="text-lg mt-12 xl:mt-8">
                    {/* Personal*/}
                    <TabsContent  value='personal'>
                        <div className="text-center xl:text-left">
                            <h3 className='h3 mb-4'> Unmatched Services Quality for over 1 years</h3>
                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                            I specialized in crafting intutive website with cutting-edge technology, delivering dynamic and engagging user experience
                        </p>
                        {/*icons */}
                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                            {
                                infoData.map((item ,index) =>{
                                    return( <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                            <div className="text-primary">{item.icon}</div>
                                            <div className="">{item.text}</div>
                                    </div>)
                                })
                            }
                        </div>
                             {/*languages */}
                            <div className="flex flex-col gap-y-2">
                                <div className="text-primary">
                                    Language Skill
                                </div>
                                <div className="border-b border-border"></div>
                                <div className="">
                                    English, Malayalam, Telugu
                                </div>

                            </div>
                        </div>
                    </TabsContent>
                      {/* qualification*/}
                    <TabsContent  value='qualification'>
                        <div className="">
                            <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                            <div className=" grid md:grid-cols-2 gap-y-8">
                                {/*Experience*/}
                                <div className="flex flex-col gap-y-6">
                                <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                                    <Briefcase />
                                    <h4 className="capitalize font-medium">
                                        {getData(qualificationData,'experience').title}
                                    </h4>
                                    </div>
                                    {/*List*/}
                                    <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData,'experience').data.map((item ,index)=>{
                                            const {company , jobTitle,year}=item
                                            return(
                                                <div className="flex gap-x-8 group " key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                    </div>
                                                    <div className="">
                                                        <div className=" font-semibod text-xl leading-none mb-2">
                                                            {company}
                                                        </div>
                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{jobTitle}</div>
                                                        <div className="text-base font-medium">{year}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    </div>
                                     {/*Education*/}
                                <div className="flex flex-col gap-y-6">
                                <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                                    <GraduationCap size={28} />
                                    <h4 className="capitalize font-medium">
                                        {getData(qualificationData,'education').title}
                                    </h4>
                                    </div>
                                    {/*List*/}
                                    <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData,'education').data.map((item ,index)=>{
                                            const {college , qualification,year}=item
                                            return(
                                                <div className="flex gap-x-8 group " key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                    </div>
                                                    <div className="">
                                                        <div className=" font-semibod text-xl leading-none mb-2">
                                                            {college}
                                                        </div>
                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                        <div className="text-base font-medium">{year}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                      {/* skills*/}
                    <TabsContent  value='skills'> 
                    <div className="text-center xl:text-left ">
                        <h3 className='h3 mb-8'>Tool i uses EveryDay</h3>
                        {/*Skills*/}
                        <div className="mb-16 ">
                            <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                            <div className="border-b border-border mb-4"></div>
                            {/*Skill list*/}
                            <div className="">
                                        {getData(skillData,'skills').data.map((item , index)=>{
                                            const {name} = item;
                                            return(
                                                <div className="flex gap-x-2 w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                    <StepForward className='text-primary'  />
                                                    <div className="font-medium">{name}</div>
                                                </div>
                                            )
                                        })}
                            </div>
                        </div>
                        {/*Tools*/}
                        <div className="">
                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                            <div className="border-b border-border mb-4"></div>
                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                {getData(skillData,'Tools').data.map((item,index)=>{
                                    const {imgPath} = item
                                    return(
                                        <div className="" key={index}>
                                            <Image src={imgPath} width={48} height={48} alt='' priority />
                                        </div>
                                    )
                                    })}
                            </div>
                        </div>
                    </div>
                    </TabsContent>
                </div>
            </Tabs>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About