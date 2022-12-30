/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { BsGithub , BsTwitter} from "react-icons/bs"
import {FaInstagram} from "react-icons/fa"
import {AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
import {SiUpwork} from "react-icons/si"

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Work', href: '#' },
]

const color_seconday = "indigo"

export default function Links(props) {
    const {size} = props;
  return (
    <div className="w-auto flex flex-row items-center justify-between">
      <a href="https://www.linkedin.com/in/cabilijc/" target="_blank"><AiFillLinkedin size={size} /></a>
      <a href="https://github.com/JCCabili" target="_blank"><BsGithub size={size}/></a>
      <a href="https://www.upwork.com/freelancers/~01eb7998bdea3e2786" target="_blank"><SiUpwork size={size}/></a>
      <a href="https://www.instagram.com/jcabili" target="_blank"><FaInstagram size={size}/></a>
      <a href="https://twitter.com/CabiliJc" target="_blank"><BsTwitter size={size}/></a>
      <a href="https://youtube.com/" target="_blank"><AiFillYoutube size={size}/></a>
    </div>
  )
}
