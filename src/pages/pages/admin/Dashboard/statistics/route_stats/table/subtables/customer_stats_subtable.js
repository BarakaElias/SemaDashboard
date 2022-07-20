import React from "react";
import { useTable } from "react-table";
import { Table } from "react-bootstrap";

const CustomerStatsSubTable = (props) => {
  const info = props.data != null ? props.data : null;
  const data = React.useMemo(() => info, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Vendor",
        accessor: "vendor",
      },
      {
        Header: "V.Account",
        accessor: "v_account",
      },
      {
        Header: "Destination",
        accessor: "destination",
      },
      {
        Header: "Sent",
        accessor: "sent",
      },
      {
        Header: "DLR %",
        accessor: "dlr",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Currency",
        accessor: "currency",
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

export default CustomerStatsSubTable;
