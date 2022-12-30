/* This example requires Tailwind CSS v2.0+ */
import { Dialog } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react'
import {MdOutlineConstruction} from "react-icons/md"

const works = [
  {
    name: "RJK Heavy Equipment Repair & Services",
    descriptions: "The RJK Heavy Equipment Repair & Services is specialized in Heavy Equipment from Erection, Dismantling, Commissioning, Jack up tower Crane, Maintenance, Trouble shooting and Rental Derrick Crane / Tower Crane.",
    img: "/static/project/rjk-website.gif",
    url: "http://www.rjkheavyequipmentrepairandservices.com/"
  },
  {
    name: "Content Management System",
    descriptions: "In this application, administrators can update, create and remove products, banners, services, projects, contacts, as well as modify company information from the main website.",
    img: "/static/project/cms-admin.gif",
    url: "http://www.rjkheavyequipmentrepairandservices.com:3000/"
  },
  {
    name: "Google Search & Indexing",
    descriptions: "tools and reports help you measure your site's Search traffic and performance, fix issues, and make your site shine in Google Search results.",
    img: "/static/project/seo.gif",
  }
]

export default function Work() {
  const [companyUrl, setCompanyUrl] = useState("#");
  return (
    <div id="work"  className="pt-10">
    <div className="px-4 text-center md:text-left py-8">
        <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
          <span className="block inline">I've built a few things</span>
        </h1>
      </div>
    
    {/* <div className="flex flex-col items-center justify-center">
        <MdOutlineConstruction size={70}/> 
        <h1 className="text-4xl tracking-tight font-bold text-primary text-1xl md:text-2xl">
          <span className="block inline text-center">This content is under construction</span>
        </h1>
        <p className="mt-3 text-center text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I am working on it!
        </p>
    </div> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map(a=>(
          <Project value={a}/>
        ))}
    </div>
    </div>
  )
}


export function Project(props) {
  const project = props?.value;
  const [isOpen, setIsOpen] = useState(false);
  const projRef = useRef(null);
  return (
    <div className="flex flex-col px-8 lg:px-20 items-center text-center">
        <img
          className="object-cover relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-md"
          src={project.img}
          alt="" onClick={()=>setIsOpen(true)}/>
        <p className="text-xl text-primary py-2">{project.name}</p>
        <p className=" text-xs text-ellipsis overflow-hidden ... pb-4">{project.descriptions}</p>
        <div className="px-6 py-2 bg-primary bg-opacity-75 rounded-md">
          <a href={project.url} target="_blank">Visit</a>
        </div>
    </div>
  )
}