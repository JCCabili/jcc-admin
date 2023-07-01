import { Fragment } from "react";
import { getProducts } from "../../../../logic/product";
import SearchTable from "../../../component/flowbite/table";

const List = (props) => {
  return(
      <SearchTable
        onQuery={(value)=>{
          return {
            name: { ilike: `%${value}%`}
          }
        }}
        pageSizes={[5, 10 ,15, 20]}
        query={getProducts}
        defaultOptions={{
          where: {
            hidden: false
          }
        }}
        headersRenderer={
          <tr>
              <th scope="col" className="pl-2">
                  Product name
              </th>
              <th scope="col">
                  Price
              </th>
              <th scope="col" className="hidden tablet:block">
                  Stock
              </th>
              <th scope="col">
                  Action
              </th>
          </tr>
        }
        rowRenderer={({row, index})=>(
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100">
              <th scope="row" className="pl-2 py-2 font-medium text-gray-900">
                  <div className="flex items-center">
                    <img src={row.productMedias.length === 0 ? "/static/img/no-pictures.png" : row.productMedias[0].url}className="h-12 w-12 rounded-lg"></img>
                    {/* <p className="pl-2 whitespace-normal md:whitespace-nowrap dark:text-white">{row.name}</p>  */}
                    <a href="#" className="font-medium hover:underline">{row.name}</a>
                  </div>
                  <ProductItemDetails items={row.productItems}/>
              </th>
              <td className="py-2">
                ₱{row.amount}
              </td>
              <td className={`py-2 hidden tablet:table-cell`}>
                  {row.quantity}
              </td>
              <td className="py-2">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
          </tr>
        )}
      >

      </SearchTable>
  )
}

const ProductItemDetails = ({items}) => {
  if (items.length > 1) {
    return (
      <div className="pl-10 pt-1 invisible hidden tablet:visible tablet:block">
        {items.map(i=>(
          <div className="flex item-center text-gray-400">
              <img src={i.imgUrl ? i.imgUrl : "/static/img/no-pictures.png"}className="h-10 w-10 rounded-lg"></img>
              <p className="pl-2 whitespace-normal md:whitespace-nowrap dark:text-white">{i.data.variants.join(', ')}</p> 
              <span className="pl-2 font-medium">Stock: {i.quantity}</span>
              <span className="pl-2 font-medium">Price: ₱{i.amount}</span>
          </div>
        ))}
      </div>)
  }
  return;
}
export default List;