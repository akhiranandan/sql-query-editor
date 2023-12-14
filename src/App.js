import "./App.css";
import React from 'react';
import { useTable } from "react-table";
import sqlLogo from "./assests/sql.png";
import msgIcon from "./assests/message.svg";
import copy from "./assests/copy.png";
import clear from "./assests/clear.png";
import previous from "./assests/previous.png";
import fakeData from "./assests/MOCK_DATA.json"

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={sqlLogo} alt="Logo" className="logo" />
            <span className="brand">SQL Editor</span>
          </div>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers WHERE customer_id = 1
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
          </div>
        </div>
        <div className="lowerSide"></div>
        <div className="listItems">
          <img src={copy} alt="" className="listItemsImg" />
          Copy
        </div>
        <div className="listItems">
          <img src={clear} alt="" className="listItemsImg" />
          Clear
        </div>
        <div className="listItems">
          <img src={previous} alt="" className="listItemsImg" />
          Previous
        </div>
      </div>
      <div className="main">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default App;
