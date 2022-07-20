import React from "react";
import { useTable } from "react-table";
import { Table } from "react-bootstrap";

const RechargesSummaryTable = () => {
  const data = React.useMemo(
    () => [
      {
        name: "Brian",
        amount: "27900",
        currency: "TZS",
        date: "2022-7-13",
      },
      {
        name: "Brian",
        amount: "27900",
        currency: "TZS",
        date: "2022-7-13",
      },
      {
        name: "Brian",
        amount: "27900",
        currency: "TZS",
        date: "2022-7-13",
      },
      {
        name: "Brian",
        amount: "27900",
        currency: "TZS",
        date: "2022-7-13",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Currency",
        accessor: "currency",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  let i = 0;
  return (
    <Table {...getTableProps()} responsive>
      <thead className="thead-dark">
        {headerGroups.map((headerGroup) => (
          <tr key={i++} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={column.Header}>
                <div className="mb-1" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </div>
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="table-hover" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={i++} {...row.getRowProps()}>
              {row.cells.map((cell) => {
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
export default RechargesSummaryTable;
