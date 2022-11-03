import React, { useState } from 'react'
import { ColumnLayout } from "@cloudscape-design/components";
import { useContext } from "react";
import { ThemeContext } from "../../context/settings/themeContext";
// import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Auth from '../../context/auth/index';
import '../../style/list.css'

// let displayResults = [];
export default function List(props) {
  const { darkMode } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(0);
  // const [dataList, setDataList] = useState([])
  const resultsPage = 3
  const pagesVisited = pageNumber * resultsPage


  console.log('NEW LIST', props.data)
  // console.log('DATA-LIST', dataList)




  const displayResults = props.list.slice(pagesVisited, pagesVisited + resultsPage).map((item, key) => {
    return (
      <div className='resultBox' id={darkMode ? "dark-taskContainer" : "taskContainer"}>
        <div id='results'>
          <div key={key} id='taskText2'> {item.assignee}</div>
          {/* <div key={key} id='taskText4' onClick={() => props.toggleComplete(item._id)}

          >Complete: {item.complete.toString()}</div> */}
          {item.complete === false ? (
            <button id={darkMode ? "dark-buttonInProgress" : "buttonInProgress"} onClick={() => props.toggleComplete(item._id)}>in-Progress</button>
          ) : <button id={darkMode ? "dark-buttonComplete" : "buttonComplete"} onClick={() => props.toggleComplete(item._id)}>Complete</button>}
        </div>
        <hr />
        <div id='taskBox' key={item._id}>
          <div id='taskName'>
            <h3 id='task'>
              task:</h3>
            <p key={key} id='taskText'>{item.text}</p>
          </div>
          <p key={key} id='taskText3'>Difficulty: {item.difficulty}</p>
          <Auth userType='delete'>
            <button key={key} id='deleteBtn' onClick={() => props.deleteItem(item._id)}>X</button>
          </Auth>
        </div>

      </div>
    )
  })




  const pageCount = Math.ceil(props.list.length / resultsPage)




  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  console.log('pageCount', pageCount)
  return (
    <div id='listBox'>
      <ColumnLayout>

        {props.list.length === 0 ? (

          <>

            {/* WON'T DISPLAY PREV AND NEXT BUTTONS */}
          </>
        ) : (
          <>
            {displayResults}
            < ReactPaginate
              previousLable={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={darkMode ? "dark-paginationBttns" : "paginationBttns"}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={"paginationActive"}
            />

          </>
        )
        }
      </ColumnLayout>

    </div>
  )

}
