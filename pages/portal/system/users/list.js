/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

import SearchTable from "../../../component/flowbite/table";
import { getUsers } from "../../../../logic/user";
import { Avatar } from "flowbite-react";

const List = (props) => {
  return(
      <SearchTable
        onQuery={(value)=>{
          return {
            email: { ilike: `%${value}%`}
          }
        }}
        pageSizes={[5, 10 ,15, 20]}
        query={getUsers}
        defaultOptions={{
          // where: {
          //   hidden: false
          // }
        }}
        headersRenderer={
          <tr>
              <th scope="col" className="px-6 hidden tablet:table-cell">
                  
              </th>
              <th scope="col" className="pl-3 tablet:p-0">
                  Email
              </th>
              <th scope="col" className="hidden tablet:table-cell">
                  Username
              </th>
              <th scope="col" className="hidden tablet:table-cell">
                  Firstname
              </th>
              <th scope="col" className="hidden tablet:table-cell">
                  Lastname
              </th>
              <th scope="col">
                  Role
              </th>
          </tr>
        }
        rowRenderer={({row, index})=>(
          <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 hidden tablet:table-cell">
                <Avatar rounded={true} />
              </th>
              <td className="py-2">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline  pl-3 tablet:p-0">{row.email}</a>
              </td>
              <td className="hidden tablet:table-cell">
                {row.username}
              </td>
              <td className="hidden tablet:table-cell">
                {row.firstName}
              </td>
              <td className="hidden tablet:table-cell">
                {row.lastName}
              </td>
              <td>
                {row.role.name}
              </td>
          </tr>
        )}
      >

      </SearchTable>
  )
}

export default List;