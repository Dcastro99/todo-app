import React, { useEffect, useState } from 'react'
import { ColumnLayout } from "@cloudscape-design/components";
import { useContext } from "react";
import { ThemeContext } from "../../context/settings/themeContext";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Auth from '../../context/auth/index';
import '../../style/list.css'

// let displayResults = [];
export default function List(props) {
  const { darkMode } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(0);
  const [dataList, setDataList] = useState([])
  // const [dBList, setDBList] = useState(null);
  const resultsPage = 3
  const pagesVisited = pageNumber * resultsPage


  console.log('NEW LIST', props.data)
  console.log('DATA-LIST', dataList)


  const handleGetAllTodos = async () => {
    const config = {
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      method: 'get',
    };
    const res = await axios(config);
    console.log('REZZZ----->>>>>', res.data);
    setDataList(res.data)
  };

  useEffect(() => {
    // async function fetchData() {
    handleGetAllTodos();

    // }

    // fetchData();
  }, [])


  const displayResults = dataList.slice(pagesVisited, pagesVisited + resultsPage).map((item, key) => {
    return (
      <div className='resultBox' id={darkMode ? "dark-taskContainer" : "taskContainer"}>
        <div id='results'>
          <div key={key} id='taskText2'> {item.assignee}</div>
          <div key={key} id='taskText4' onClick={() => props.toggleComplete(item.id)}

          >Complete: {item.complete.toString()}</div>
        </div>
        <hr />
        <div id='taskBox' key={item.id}>
          <div id='taskName'>
            <h3 id='task'>
              task:</h3>
            <p key={key} id='taskText'>{item.text}</p>
          </div>
          <p key={key} id='taskText3'>Difficulty: {item.difficulty}</p>
          <Auth userType='delete'>
            <button key={key} id='deleteBtn' onClick={() => props.deleteItem(item.id)}>X</button>
          </Auth>
        </div>

      </div>
    )
  })




  const pageCount = Math.ceil(dataList.length / resultsPage)




  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  console.log('pageCount', pageCount)
  return (
    <div id='listBox'>
      <ColumnLayout>

        {dataList.length === 0 ? (

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
