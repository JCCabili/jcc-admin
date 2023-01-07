import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import {AutoSizer, ColumnSizer, Grid as GridTable} from 'react-virtualized';
import 'react-virtualized/styles.css';

export default function Grid(props) {
  const {defaultOptions, query, rowCount, cellRenderer } = props;
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState(defaultOptions);

  // if (!query) {
  //   return <Fragment/>
  // }
  const {data, error, loading} = query(options,page, rowCount); 
  
  const list = (data?.edges || []).map(i=>Object.values(i.node)) || [];

  return (
    <AutoSizer>
      {({width, height})=>(
        <GridTable
        columnCount={list.length > 0 ? list[0].length : 0}
        columnWidth={100}
        rowHeight={50}
        width={width}
        height={height}
        rowCount={list.length}
        cellRenderer={(rr)=>cellRenderer({...rr, list})}
      />
      )}
    </AutoSizer>
          
    
  )
}