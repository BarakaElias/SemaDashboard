import React, { useEffect, useState } from "react";
import { Row, Table, Col } from "react-bootstrap";
import { useTable } from "react-table";
import axios from "axios";
import {
  faStop,
  faPause,
  faReplyAll,
  faPlug,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ConnectedVendorAccountsTable = () => {
  const data = React.useMemo(
    () => [
      {
        account: "Airtel",
        iq: "0",
        status: "Online",
        mode: "Transceiver",
      },
      {
        account: "Airtel",
        iq: "0",
        status: "Online",
        mode: "Transceiver",
      },
      {
        account: "Airtel",
        iq: "0",
        status: "Online",
        mode: "Transceiver",
      },
      {
        account: "Airtel",
        iq: "0",
        status: "Online",
        mode: "Transceiver",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "disconnect",
        Cell: () => (
          <FontAwesomeIcon
            className="align-middle me-2"
            icon={faStop}
            variant="danger"
            fixedWidth
          />
        ),
      },
      {
        Header: "",
        accessor: "movequeue",
        Cell: () => (
          <FontAwesomeIcon
            className="align-middle me-2"
            icon={faReplyAll}
            variant="primary"
            fixedWidth
          />
        ),
      },
      {
        Header: "",
        accessor: "pause",
        Cell: () => (
          <FontAwesomeIcon
            className="align-middle me-2"
            icon={faPause}
            variant="warning"
            fixedWidth
          />
        ),
      },
      {
        Header: "Account",
        accessor: "account",
      },
      {
        Header: "IQ",
        accessor: "iq",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Mode",
        accessor: "mode",
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
export default ConnectedVendorAccountsTable;
