import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {AutoSizer, List as VirtualList} from 'react-virtualized';
import InputField from "../formsy/input"
import {BiSearchAlt} from "react-icons/bi"
import Formsy from 'formsy-react';

export default function List(props) {
  const {defaultOptions, query, rowCount, rowRenderer, rowHeight, className, headersRenderer } = props;
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState(defaultOptions);

  console.log(defaultOptions)
  const {data, error, loading} = query(options,page, rowCount); 
  

  
  return (
    <div className="">
      <div className="my-3 pt-4 px-4 grow shadow appearance-none border-none rounded-lg">
        <Formsy onValidSubmit={()=>console.log()}>
        <div className='grid grid-cols-3'>
           <InputField 
              required
              name="search"
              placeholder="Search"
              icon={<BiSearchAlt/>}
            />
        </div>
        </Formsy>
      </div>
      <div className='p-4 bg-secondary rounded-t-lg text-white'>
          {headersRenderer}
      </div>
      <div className="h-96 grow shadow appearance-none border-none rounded-lg">
        <AutoSizer>
         {({height, width}) => (
            <VirtualList
            className="px-4 py-2"
            width={width}
            height={height}
            rowCount={(data?.edges || []).length}
            rowHeight={height / (data?.edges || []).length}
            rowRenderer={(rr)=>{
              return rowRenderer({...rr, row: data?.edges[rr.index].node})
            }}
          />
         )}
        </AutoSizer>
      </div>
    </div>
  )
}
