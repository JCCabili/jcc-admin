/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'


const techStack = [
  "Javascript (ES6+)",
  "React.js",
  "Node.js",
  "Typescript",
  "Tailwind",
  "Boostrap",
  "Express",
  "GraphQL",
  "Rabbit MQ",
  "Redis",
  "Postgres SQL",
]

export default function About() {
  const [companyUrl, setCompanyUrl] = useState("#");
  return (
    <div id="about"  className="pt-10">
    <div className="px-4 text-center md:text-left py-8">
      <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
        <span className="block inline">About Me</span>
      </h1>
    </div>
    <div className="flex flex-wrap items-center justify-center px-4">
       <div className="px-4 w-full">
        <p className="my-4 text-white">
          Hello! My name is JC, and I like making things that are accessible online. When I was a young child, in 2006, my technology interest first began when my friends and I played a private Ragnarok server and began to modify parts of the data on it, including damage, level, and other elements that are now referred to as databases (CSV). Today, having worked at a dev house, a start-up parking automation firm, and a pharmaceutical company has been a privilege.
        </p>
        <p className="my-4 text-white">
        Building a cloud-based Wi-Fi management solution that centralizes and automates the management of a Wi-Fi infrastructure is my main focus right now.  
        </p>
        <span className="my-6 text-white">
          Here are a few technologies I’ve been working with recently:
        </span>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 w-full list-disc px-4">
          {techStack.map((t, index)=>(
            <li key={index} >{t}</li>
          ))}
        </ul>
      </div>
      {/* <div className="px-4">
        <img
          className="object-cover w-72 h-72 lg:w-96 lg:h-96 rounded"
          src="/static/img/profile2.JPG"
          alt=""/>
      </div> */}
    </div>
    </div>
  )
}