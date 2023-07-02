import React, { Fragment, useState } from 'react';
import {AutoSizer, Table} from 'react-virtualized';

export default function SearchTable(props) {
  const {defaultOptions, query, rowCount, rowRenderer, rowHeight, className, headersRenderer } = props;
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState(defaultOptions);
  
  if (!query) {
    return <Fragment/>
  }

  console.log(defaultOptions)
  const {data, error, loading} = query(options,page, rowCount); 
  
  if (loading) {
    return <Fragment/>
  }
  
  
  return (
    <AutoSizer>
      {({height, width})=>(
        <Table 
        width={width}
        height={300}
        headerHeight={30}
        rowHeight={40}
        rowCount={data.edges.length}
        rowGetter={({index}) => data.edges[index].node}>
          {props.children}
        </Table>
      )}
    </AutoSizer>
    
  )
}
