
const menu = [
   {
      name: "Dashboard",
      icon:  <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>,
      href: "/portal",
      permission: "*"
   },
   {
      name: "Products",
      icon: <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>,
      href: "/system/products",
      permission: "Products"
   },
   {
      name: "Stocks",
      icon: <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>,
      href: "/system/stocks",
      permission: "Stocks"
   },
   {
      name: "Users",
      icon: <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>,
      href: "/system/users",
      permission: "Users",
      notification: {
         style: "text-blue-600 bg-blue-200",
         value: 100
      }
   }
];


export default function SideBar(props){
  return <aside class="w-64 bg-gray-50 rounded dark:bg-gray-800" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3">
     <ul class="space-y-2">
         {menu.map(m=>{
            return (
            <li>
               <a href={m.href} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  {m.icon}
                  <span class="flex-1 ml-3 whitespace-nowrap font-semi">{m.name}</span>
                  {m.notification && <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-200 rounded-full dark:bg-blue-700 dark:text-blue-300">{m.notification.value}</span>}
               </a>
            </li>)
         })}
     </ul>
  </div>
</aside>
}