import Image from 'next/image'
import icon from "../../public/download20250203141523.png"
import { SiZenn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialLink } from '../components/SocialLink'

import { NavButton } from '../components/NavButton'
import { motion } from 'motion/react';



export default function Home() {
  const socialLinks = [
    { href: 'https://github.com/routechan', icon: FaGithub },
    { href: 'https://zenn.dev/routechan', icon: SiZenn },
    { href: '', icon: FaXTwitter }
  ]

  return (
   
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.6}}
    exit={{ opacity: 1 }}
   
    >
      <h1 className="text-6xl font-bold text-center ">

       Hello World!
      </h1>
      <p className="text-center mt-4 text-lg">このブログはWebエンジニアの日常や、ためになったことを書き留めたブログです。</p>

      <div className="flex justify-center mt-8">
        <Image 
          src={icon} 
          alt="アイコン"
          width={200}
          height={200}
          priority
          className='rounded-full'
        />
      </div>
      <p className='text-center'>Route.chan</p>
  
        <ul className='flex justify-center gap-2 mt-2 text-3xl'>
          {socialLinks.map((link) => (
            <SocialLink key={link.href} {...link} />
          ))}
        </ul>

      <div className='flex justify-center gap-8 mt-6'>
        <NavButton href="/tech" text="Tech" />
        <NavButton href="/diary" text="Diary" />
      </div>
    </motion.div>

  );
}
