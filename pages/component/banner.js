/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { BsGithub , BsTwitter} from "react-icons/bs"
import {FaInstagram} from "react-icons/fa"
import {AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
import {SiUpwork} from "react-icons/si"
import Links from './links'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Work', href: '#' },
]

const color_seconday = "indigo"

export default function Banner() {
  const [companyUrl, setCompanyUrl] = useState("https://vostronet.com/");
  const completion = useReadingProgress();
  return (
    <div className="flex flex-wrap items-center justify-center px-4">
      <div className="px-4 text-center ">
        <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
          <span className="block inline">Hi, I'm </span>
          <span className="text-primary sm:inline">JC</span>
        </h1>
        <h3 className="py-2 text-2xl tracking-tight font-bold text-white sm:text-3xl md:text-5xl">
          <span className="block xl:inline">I build things for the web</span>
        </h3>
        <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          I build (and sometimes design) exceptional digital experiences as a software engineer. Currently, I’m focused on building accessible, internet products at <a className="text-primary" href={companyUrl} target="_blank"><b>VostroNet</b></a> 
        </p>
        <div className="mt-5 sm:mt-8 px-4 lg:px-20">
          <Links size={24}/>
        </div>
      </div>
      <div className="flex px-4 py-2 order-first xl:order-last justify-self-auto">
        <img
          className="object-cover relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full"
          src="/static/img/profile1.JPG"
          alt=""/>
      </div>
    </div>
  )
}


export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    function updateScrollCompletion() {
      // see how much we have scrolled
      const currentProgress = window.scrollY;
      // see how much total scroll is available
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }
    // add scroll event listener
    window.addEventListener("scroll", updateScrollCompletion);

    // remove scroll event listener on umount
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
}