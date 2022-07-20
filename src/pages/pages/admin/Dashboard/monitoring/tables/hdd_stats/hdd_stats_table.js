import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, ProgressBar } from "react-bootstrap";
import { useTable } from "react-table";
import { HardDrive } from "react-feather";

const HddStatsTable = () => {
  const data = React.useMemo(
    () => [
      {
        drive_name: "C",
        space_available: "185GB/299GB",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Drive",
        accessor: "drive_name",
        Cell: ({ value }) => {
          return (
            <React.Fragment>
              <HardDrive />
              &emsp;
              {value}
            </React.Fragment>
          );
        },
      },
      {
        Header: "Space Available",
        accessor: "space_available",
      },
      {
        Header: "",
        accessor: "_",
        Cell: () => <ProgressBar className="mb-3" variant="primary" now={50} />,
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <React.Fragment>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.Header}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
export default HddStatsTable;
