

import Head from 'next/head'
import PortalNavbar from './portal-navbar'
import SideBar from './flowbite/side-bar'
import { useRouter } from 'next/router'
import { Breadcrumb } from 'flowbite-react'


export default function PortalLayout(props) {
  const router = useRouter();
  console.log(router)
  return (
    <>
      <Head>
        <script type="text/javascript" src="/static/crisp.js"></script>
        {/* <!-- Primary Meta Tags --> */}
        <title>Hi, Im JC!</title>
        <meta name="title" content="Senior Full Stack Developer - Jhon Christopher Cabili" />
        <meta name="description" content="Senior Full Stack Developer - Jhon Christopher Cabili" />
        <meta name="keywords" content="Jhon Christopher Cabili, Fullstack Software Developer" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.jccabili.com/" />
        <meta property="og:title" content="Senior Full Stack Developer - Jhon Christopher Cabili" />
        <meta property="og:description" content="Hello! My name is JC, and I like making things that are accessible online. When I was a young child, in 2006, my technology interest first began when my friends and I played a private Ragnarok server and began to modify parts of the data on it, including damage, level, and other elements that are now referred to as databases (CSV). Today, having worked at a dev house, a start-up parking automation firm, and a pharmaceutical company has been a privilege." />
        <meta property="og:image" content="/static/img/profile1.JPG"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://www.jccabili.com/" />
        <meta property="twitter:title" content="Senior Full Stack Developer - Jhon Christopher Cabili" />
        <meta property="twitter:description" content="Hello! My name is JC, and I like making things that are accessible online. When I was a young child, in 2006, my technology interest first began when my friends and I played a private Ragnarok server and began to modify parts of the data on it, including damage, level, and other elements that are now referred to as databases (CSV). Today, having worked at a dev house, a start-up parking automation firm, and a pharmaceutical company has been a privilege."/>
        <meta property="twitter:image" content="/static/img/profile1.JPG"/ >
        <meta name="google-site-verification" content="" />
      </Head>
      <div className='flex flex-col p-0 m-0'>
        <PortalNavbar/>
        <div className='flex flex-row'>
          <SideBar/>
          <div className='flex bg-gray-100 w-full h-[calc(100vh-72px)]'>
            <div className='flex flex-col w-full'>
              <Breadcrumb className="p-3">
                {router.route.split("/").map((i, index)=>{
                  if(i) {
                    return (
                      <Breadcrumb.Item key={index}>
                        <span className='text-xs'>{i.toUpperCase()}</span>
                      </Breadcrumb.Item>
                    )
                  }
                })}
              </Breadcrumb>
              <main className="rounded-lg overflow-y-auto flex flex-col">
                {props.children}
              </main>
            </div>
          </div>
        </div>
        
      </div>

      {/* <div className='flex'>
        <div className=' flex-grow-0'>Body</div>
      </div> */}
    </>
  )
}
