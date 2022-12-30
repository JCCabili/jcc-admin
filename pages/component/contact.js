/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Work', href: '#' },
]

const color_seconday = "indigo"

export default function Contact() {
  const [companyUrl, setCompanyUrl] = useState("#");
  return (
    <div id="contact"  className="pt-10">
    <div className="px-4 text-center md:text-left py-8">
        <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
          <span className="block inline">Get In Touch</span>
        </h1>
      </div>
    <div className="flex flex-wrap items-center justify-center">
        <p className="mt-3 text-center text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Shoot me an email directly on <br/><a href="mailto: cabilijc@gmail.com"><b>cabilijc@gmail.com</b></a>
        </p>
    </div>
    </div>
  )
}