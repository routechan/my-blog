import { motion } from 'motion/react'
import Link from 'next/link'
import React, { useState } from 'react'


const Header = () => {
const [isOpenNav,setIsOpenNav] = useState(true);
const toggleHamburger = ():void =>{
  setIsOpenNav(!isOpenNav)
}
  return (
    <motion.header
    initial={{y:-64}}
    animate={{y:0}}
    transition={{duration:0.5,type:"spring",stiffness:100}}
    className=' shadow-md  '>
      <div className='px-4 h-16 flex items-center justify-between max-w-5xl mx-auto relative z-10'>
        <Link href="/"><div className='text-xl font-bold'>Route.chan</div></Link>

        {/* pc用ナビゲーション */}
        <nav className='hidden md:block'>
    <ul className='flex gap-8 '>
        <li className='hover:text-blue-400'><Link href="/">Home</Link></li>
        <li className='hover:text-blue-400'><Link href="/tech">Tech</Link></li>
        <li className='hover:text-blue-400'><Link href="/diary">Diary</Link></li>
    </ul>
</nav>

<div className='w-6 h-4 relative md:hidden' onClick={toggleHamburger}>
  <span className='absolute top-0 inline-block w-full h-0.5 bg-slate-950'></span>
  <span className='absolute top-1/2 inline-block w-full h-0.5 bg-slate-950'></span>
  <span className='absolute top-full inline-block  w-full h-0.5 bg-slate-950'></span>
</div>


</div>
{/* ハンバーガーメニュー */}
<motion.nav
  initial={{x: "100%"}}
  animate={{x: isOpenNav ? "0%" : "100%"}}
  transition={{duration: 0.3}}
  className={`md:hidden fixed top-16 right-0 w-1/3 h-screen bg-gray-900/90`}>
  <ul className='flex flex-col gap-8 text-center mt-4 text-white'>
    <li className='hover:text-blue-400 text-xl'><Link href="/">Home</Link></li>
    <li className='hover:text-blue-400 text-xl'><Link href="/tech">Tech</Link></li>
    <li className='hover:text-blue-400 text-xl'><Link href="/diary">Diary</Link></li>
  </ul>
</motion.nav>
    </motion.header>
  )
}

export default Header