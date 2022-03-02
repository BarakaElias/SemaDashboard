import React from "react";
import { Row, Table } from "react-bootstrap";
import { useTable } from "react-table";

const MatrixTable = (props) => {
  const mno_data = [...props.data];
  const data = React.useMemo(() => mno_data, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Vendor/MNO",
        accessor: "vendor",
      },
      {
        Header: "Vodacom",
        accessor: "vodacom",
      },
      {
        Header: "Tigo",
        accessor: "tigo",
      },
      {
        Header: "Airtel",
        accessor: "airtel",
      },
      {
        Header: "Halotel",
        accessor: "halotel",
      },
      {
        Header: "Zantel",
        accessor: "zantel",
      },
      {
        Header: "TTCL",
        accessor: "ttcl",
      },
      {
        Header: "Smile",
        accessor: "smile",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  let i = 0;

  return (
    <React.Fragment>
      <Row>
        <Table {...getTableProps()} className="m-1">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                key={i++ + "matrixrow"}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th key={i++ + "matrixth"} {...column.getHeaderProps()}>
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
                <tr key={i++ + "datarow"} {...row.getRowProps}>
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
      </Row>
    </React.Fragment>
  );
};
export default MatrixTable;
