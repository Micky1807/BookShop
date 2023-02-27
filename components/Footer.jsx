import React from 'react'
import Link from 'next/link'
import { AiFillInstagram,AiFillTwitterCircle ,AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
    <p>2023 © Book Shop All rights reserved</p>
    <p className='icons'>
    <Link href="https://www.instagram.com/">
    <AiFillInstagram/>
    </Link>
    <Link href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
    <AiFillTwitterCircle />
    </Link>
    <Link href="https://in.linkedin.com/">
    <AiFillLinkedin />
    </Link>
    <Link href="https://github.com/">
    <AiFillGithub />
    </Link>

    </p>
    </div>
  )
}

export default Footer
