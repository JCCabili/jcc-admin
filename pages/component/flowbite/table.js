import { Dropdown, Pagination } from 'flowbite-react';
import React, { Fragment, useMemo, useState } from 'react';
import InputField from "../formsy/input"
import Formsy from 'formsy-react';
import {BiSearchAlt} from "react-icons/bi"
import {FcPrevious, FcNext} from "react-icons/fc"
import { Spinner } from './spinner';

export default function SearchTable(props) {
  const {defaultOptions, query, rowRenderer, pageSizes, headersRenderer, onQuery } = props;
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState(defaultOptions);
  const [rowCount, setRowCount] = useState(5);
  const [searchValue, setSearchValue] = useState("");

  const {data, error, loading} = query(options,page, rowCount); 

  // if (loading) {
  //   return <Fragment/>
  // }
  const handleKeyEnter = (e) => {
    if (e.key === 'Enter') {
      const {value} = e.target;
      setSearchValue(value)
      search(value)
      setPage(0)
    }
  }

  const handleIconSearch = () => {
    search(searchValue)
  }

  const search = (value) => {
    const queryOption = onQuery(value);
    let newWhere = {...options.where, ...queryOption};
    setOptions({...options, where: newWhere})
  }

  const handleSearchChange = (e) => {
    console.log(e)
    setSearchValue(e.target.value)
  }
  const onPageChange = (data) => {
    console.log(data)
    setPage(data - 1)
  }

  const getTotalPage = () => {
    if (data?.totalCount) {
      const totPage = (data?.totalCount / rowCount);
      if ((data?.totalCount % rowCount) > 0) {
        ++totPage
      }
      return Math.trunc(totPage);
    
    }
    return 0
  }
  
  return (
  <div className='flex flex-col p-3'>
    <div className="p-0 overflow-x-auto shadow-md sm:rounded-lg items-center bg-gray-50 mobile-m:p-2">
        <Formsy>
          <div className="max-w-[300px]">
            <InputField 
              name="search" 
              placeholder="Search"
              onChange={handleSearchChange}
              icon={<BiSearchAlt className="cursor-pointer" onClick={handleIconSearch}/>}
              onKeyDown={handleKeyEnter}
              value={searchValue}
              />
          </div>
        </Formsy>
    </div>
    {loading && <div className="flex justify-center w-full items-center p-4"><Spinner/></div>}
    {!loading && <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headersRenderer}
          </thead>
          <tbody>
              {(data?.edges || []).map((row, i)=>(
                  rowRenderer({index: i, row: row.node})
              ))}
          </tbody>
      </table>
      {(!loading && data?.edges.length === 0 ) && (
        <div className="flex flex-col items-center w-full p-10 text-xs text-gray-700 uppercase">
          <img src="/static/img/empty-box.png"/>
          <p>No Record Found.</p>
        </div>
      )}
    </div>}
    {!loading && (<div className="flex flex-col  mt-2 p-3 overflow-x-auto shadow-md sm:rounded-lg items-center tablet:flex-row">
      <span className="mt-2 pr-3 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">{data?.totalCount} item(s)</span>
      {data?.totalCount > 0 && <RowCount rowCount={rowCount} setRowCount={setRowCount} setPage={setPage} pageSizes={pageSizes}/>}
      {getTotalPage() > 1 && (<Pagination
        className={"mt-0 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 items-center"}
        // layout='navigation'
        currentPage={page + 1}
        totalPages={getTotalPage()}
        onPageChange={onPageChange}
      />)}
    </div>)} 
    <div>
    </div>
  </div>  
  )
}

const RowCount = (props) =>{
  const {rowCount, setRowCount, pageSizes, setPage} = props;
  const [show, setShow] = useState(false);

  const selectCount = (value) => {
    setPage(0);
    setRowCount(value);
    setShow(false)
  }

  if (!pageSizes) {
    pageSizes = [25, 20 , 15, 10, 5];
  } 
  return (
    <div className="mt-2 px-2">
      <Dropdown  label={rowCount} placement="top">
      {pageSizes.map(i=>(
        <Dropdown.Item onClick={()=>selectCount(i)}>
          {i}
        </Dropdown.Item>
      ))}
    </Dropdown>
    </div>
  )
}


