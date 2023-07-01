import { Badge, Sidebar } from 'flowbite-react';
import {HiChartPie, HiShoppingBag, HiUser} from 'react-icons/hi';
import {BsBox} from "react-icons/bs"
const menu = [
   {
      name: "Dashboard",
      icon: <HiChartPie/>,
      href: "/portal",
      permission: "*"
   },
   {
      name: "Products",
      icon: <HiShoppingBag/>,
      href: "/portal/system/products",
      permission: "Products"
   },
   {
      name: "Stocks",
      icon: <BsBox/>,
      href: "/portal/system/stocks",
      permission: "Stocks"
   },
   {
      name: "Users",
      icon: <HiUser/>,
      href: "/portal/system/users",
      permission: "Users",
      notification: {
         style: "text-blue-600 bg-blue-200",
         value: 100
      }
   }
];


export default function SideBar(props){
  return <aside className="w-[4rem] bg-gray-50 rounded dark:bg-gray-800 relative tablet:w-64" aria-label="Sidebar">
  <div className="overflow-y-auto py-4 px-3">
     <ul className="space-y-2">
         {menu.map((m, i)=>{
            return (
            <li key={i}>
               <a href={m.href} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  {m.icon}
                  <span className="invisible hidden text-xs uppercase flex-1 ml-3 whitespace-nowrap tablet:visible tablet:inline">{m.name}</span>
                  {/* {m.notification && <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-200 rounded-full dark:bg-blue-700 dark:text-blue-300">{m.notification.value}</span>} */}
               </a>
            </li>)
         })}
     </ul>
  </div>
</aside>
}

// export default function SideBar(props){
//    return (
//       <Sidebar collapsed={true}aria-label="Sidebar with call to action button example">
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//          {menu.map(m=>{
//             return (<Sidebar.Item
//                href={m.href}
//                icon={m.icon}
//              >
//                <p>
//                {m.name}
//                </p>
//              </Sidebar.Item>)
//          })}
          
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//       <Sidebar.CTA>
//         <div className="mb-3 flex items-center">
//           <Badge color="warning">
//             Beta
//           </Badge>
//           <button
//             aria-label="Close"
//             className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
//             type="button"
//           >
//             {/* <SeeSourceCodeForSVG /> */}
//           </button>
//         </div>
//         <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
//           <p>
//             Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your
//             profile.
//           </p>
//         </div>
//         <a
//           className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
//           href="#"
//         >
//           <p>
//             Turn new navigation off
//           </p>
//         </a>
//       </Sidebar.CTA>
//     </Sidebar>
//    )
   
//  }