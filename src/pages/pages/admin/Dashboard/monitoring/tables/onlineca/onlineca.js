import React, { useEffect, useState } from "react";
import { Row, Table, Col } from "react-bootstrap";
import { useTable } from "react-table";
import axios from "axios";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OnlineCa = () => {
  const data = React.useMemo(
    () => [
      {
        id: "FDI Rwanda",
        binds: "0",
        status: "Offline",
        mode: "Transceiver",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "connect",
        Cell: () => (
          <FontAwesomeIcon
            className="align-middle me-2"
            icon={faLockOpen}
            variant="success"
            fixedWidth
          />
        ),
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Mode",
        accessor: "mode",
      },
      {
        Header: "Binds",
        accessor: "binds",
      },
      {
        Header: "Status",
        accessor: "status",
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
export default OnlineCa;
