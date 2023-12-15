import "../App.css";
import React from "react";
import { useTable } from "react-table";


const DisplayTable = ({displayData}) => {
  const data = React.useMemo(() => displayData, [displayData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "productID",
        accessor: "productID",
      },
      {
        Header: "productName",
        accessor: "productName",
      },
      {
        Header: "supplierID",
        accessor: "supplierID",
      },
      {
        Header: "categoryID",
        accessor: "categoryID",
      },
      {
        Header: "quantityPerUnit",
        accessor: "quantityPerUnit",
      },
      {
        Header: "unitPrice",
        accessor: "unitPrice",
      },
      {
        Header: "unitsInStock",
        accessor: "unitsInStock",
      },
      {
        Header: "unitsOnOrder",
        accessor: "unitsOnOrder",
      },
      {
        Header: "reorderLevel",
        accessor: "reorderLevel",
      },
      {
        Header: "discontinued",
        accessor: "discontinued",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="" {...column.getHeaderProps()}>{column.render("Header")}</th>
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
  );
};
export default DisplayTable;
