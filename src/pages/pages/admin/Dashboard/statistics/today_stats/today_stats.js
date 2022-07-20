import React from "react";
import { useTable } from "react-table";
import { Table } from "react-bootstrap";

const TodayStats = () => {
  const data = React.useMemo(
    () => [
      {
        information: "New Customers",
        total: "0",
      },
      {
        information: "Total SMS Sent",
        total: "14,541",
      },
      {
        information: "Total SMS Delivered",
        total: "12,775",
      },
      {
        information: "DLR Percentage",
        total: "87.86",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "information",
      },
      {
        Header: "",
        accessor: "total",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  let i = 0;
  return (
    <Table {...getTableProps()} className="table table-borderless m-1">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={i++ + "matrixrow"} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={i++ + "matrixth"} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="table-hover" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={i++ + "datarow"} {...row.getRowProps}>
              {/* <td>{row.original.network}</td> */}
              {row.cells.map((cell) => {
                // console.log(cell);

                return (
                  <td key={i++ + "datacell"} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TodayStats;
