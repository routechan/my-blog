import { IconType } from 'react-icons'

type SocialLinkProps = {
  href: string
  icon: IconType
}

export const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => {
  return (
    <li className='hover:text-blue-300'>
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <Icon />
      </a>
    </li>
  )
} 