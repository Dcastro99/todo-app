import React, { useState } from 'react'
import { ColumnLayout } from "@cloudscape-design/components";
import { useContext } from "react";
import { ThemeContext } from "../../context/settings/themeContext";
import ReactPaginate from 'react-paginate';
import '../../style/list.css'



export default function List(props) {
  const { darkMode } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(0);


  const resultsPage = 3
  const pagesVisited = pageNumber * resultsPage

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
          <button id='deleteBtn' onClick={() => props.deleteItem(item.id)}>X</button>
        </div>

      </div>
    )
  })
  const pageCount = Math.ceil(props.list.length / resultsPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <div id='listBox'>
      <ColumnLayout>
        {displayResults}
        <ReactPaginate
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
      </ColumnLayout>
    </div>
  )
}
