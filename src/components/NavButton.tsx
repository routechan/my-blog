import { motion } from 'framer-motion'
import Link from 'next/link'

type NavButtonProps = {
  href: string
  text: string
}

export const NavButton = ({ href, text }: NavButtonProps) => {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className='bg-blue-400 text-white h-16 w-28 rounded-md text-2xl font-bold'
      >
        {text}
      </motion.button>
    </Link>
  )
} 