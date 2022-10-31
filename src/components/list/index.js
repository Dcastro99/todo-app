import React, { useState } from 'react'
import { ColumnLayout } from "@cloudscape-design/components";
import { useContext } from "react";
import { ThemeContext } from "../../context/settings/themeContext";
import ReactPaginate from 'react-paginate';
import Auth from '../../context/auth/index';


import '../../style/list.css'

const listArray = []

export default function List(props) {
  const { darkMode } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(0);
  const resultsPage = 3
  const pagesVisited = pageNumber * resultsPage

  listArray.push(props.data)
  console.log('ARRAY::', typeof (listArray))

  const displayResults = props.list.slice(pagesVisited, pagesVisited + resultsPage).map(item => {
    return (
      <div id={darkMode ? "dark-taskContainer" : "taskContainer"}>
        <div id='results'>
          <p id='taskText2'>Assigned to: {item.assignee}</p>
          <div id='taskText4' onClick={() => props.toggleComplete(item.id)}

          >Complete: {item.complete.toString()}</div>
        </div>
        <div id='taskBox' key={item.id}>
          <div id='taskName'>
            <h3 id='task'>
              task:</h3>
            <p id='taskText'>{item.text}</p>
          </div>
          <p id='taskText3'>Difficulty: {item.difficulty}</p>
          <Auth userType='delete'>
            <button id='deleteBtn' onClick={() => props.deleteItem(item.id)}>X</button>
          </Auth>
        </div>

      </div>
    )
  })

  const pageCount = Math.ceil(props.list.length / resultsPage)


  // console.log('RESULTS', displayResults)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  console.log('pageCount', pageCount)
  return (
    <div id='listBox'>
      <ColumnLayout>

        {pageCount === 0 ? (

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
