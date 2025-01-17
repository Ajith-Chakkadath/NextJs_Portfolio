
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";


const links = [
    {path: '/' , name: 'Home'},
    {path: '/projects' , name: 'My Projects'},
    {path: '/contacts' , name: 'Contact'}
]


const Nav = ({containerStyles , linkStyles , underLineStyles}) => {
  const path = usePathname();


    return (
    <nav className={`${containerStyles}`}>
{ links.map((link ,index)=>{
    return<Link href={link.path} key={index} className={`cpaitalize ${linkStyles}`}>
        {link.path === path && (
            <motion.span inital={{y:'-100%'}}  animate={{y:0}}  transition={{type:'tween'}} layoutId='unerline' className={`${underLineStyles}`} />
        )}
        {link.name}
        </Link>
})}
    </nav>
  )
}

export default Nav