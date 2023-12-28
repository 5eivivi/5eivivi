import './SocialNetworks.css'

// Icon
import { AiOutlineLinkedin as LinkedIn, AiOutlineInstagram as Instagram } from 'react-icons/ai'
import { VscGithubInverted } from 'react-icons/vsc'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { TbBrandTiktok } from 'react-icons/tb'

export const SocialNetworks = () => {
  return (
    <div className='social-networks'>
      <a href='https://www.linkedin.com/in/5eivivi' title='LinkedIn' className='icon' target='_blank' rel='noreferrer'><LinkedIn /></a>
      <a href='https://www.instagram.com/5eivivi' title='Instagram' className='icon' target='_blank' rel='noreferrer'><Instagram /></a>
      <a href='https://www.github.com/5eivivi' title='GitHub' className='icon' target='_blank' rel='noreferrer'><VscGithubInverted /></a>
      <a href='https://www.facebook.com/5eivivi' title='Facebook' className='icon' target='_blank' rel='noreferrer'><FaFacebook /></a>
      <a href='https://www.twitter.com/5eivivi' title='Twitter' className='icon' target='_blank' rel='noreferrer'><RiTwitterXFill /></a>
      <a href='https://www.tiktok.com/@5eivivi' title='TikTok' className='icon' target='_blank' rel='noreferrer'><TbBrandTiktok /></a>
      <a href='https://api.whatsapp.com/send?phone=+1646687-5312&text=Hello' Title='WhatsApp' className='icon' target='_blank' rel='noreferrer'><BsWhatsapp /></a>
      <a href='mailto:asielvallevalera@gmail.com' title='Email' className='icon' target='_blank' rel='noreferrer'><MdOutlineEmail /></a>
    </div>
  )
}
