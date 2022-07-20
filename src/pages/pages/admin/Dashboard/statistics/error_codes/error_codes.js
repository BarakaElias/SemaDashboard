import React from "react";
import { useTable, useFilters } from "react-table";
import { Row, Table, Col, Button } from "react-bootstrap";
import {
  ColumnFilter,
  EmptyColumnFilter,
} from "../../../sender_ids/sender_id_table_extensions/ColumnFilter";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ErrorCodes = () => {
  const data = React.useMemo(
    () => [
      {
        parts: "65",
        tc: "0",
        error: "mcc/mnc Not Found",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Parts",
        accessor: "parts",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "T.C",
        accessor: "tc",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Error",
        accessor: "error",
        Filter: ColumnFilter,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters);
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
export default ErrorCodes;
