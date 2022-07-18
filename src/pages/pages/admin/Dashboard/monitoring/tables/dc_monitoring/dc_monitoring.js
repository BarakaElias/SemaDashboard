import React, { useEffect, useState } from "react";
import { Row, Table, Col } from "react-bootstrap";
import { useTable } from "react-table";
import axios from "axios";

const DCMonitoring = () => {
  const data = React.useMemo(
    () => [
      {
        name: "DC",
        status: "Online",
        ip: "127.0.0.1",
        port: "5002",
        cpu: "6%",
        ram: "55%",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "refresher",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "IP",
        accessor: "ip",
      },
      {
        Header: "Port",
        accessor: "port",
      },
      {
        Header: "CPU",
        accessor: "cpu",
      },
      {
        Header: "RAM",
        accessor: "ram",
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
export default DCMonitoring;
