
import Navbar from './navbar'
import Head from 'next/head'


export default function Layout(props) {
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
      <div className="relative bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-slate-700 sm:pb-2 md:pb-4 lg:pb-6 xl:pb-8 lg:w-full">
            <Navbar/>
            <main className="mt-10 mx-auto max-w-7xl px-4">
              <div className="w-full">
                {props.children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

{/* <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="1d76f5e6-38e8-4fbc-a380-2edf7b447420";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script> */}