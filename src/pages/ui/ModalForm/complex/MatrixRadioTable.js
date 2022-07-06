import React, { useState } from "react";
import { Field, FieldArray } from "formik";
import { Form, Row, Col, Table, Alert } from "react-bootstrap";

import { useTable } from "react-table";

const MatrixRadioTable = (props) => {
  let i = 0;
  let index = -1;
  const [mnoData, setMnoData] = useState([
    {
      vendor: "Halotel",
      vodacom: "Registered",
      halotel: "Not Registered",
      airtel: "Registered",
    },
    {
      vendor: "Vodacom",
      vodacom: "Not Registered",
      halotel: "Registered",
      airtel: "Pending",
      tigo: "Pending",
    },
    {
      vendor: "Airtel",
      vodacom: "Registered",
      halotel: "Registered",
      airtel: "Pending",
      tigo: "Pending",
    },
    {
      vendor: "Zantel",
      vodacom: "Registered",
      halotel: "Registered",
      airtel: "Pending",
      tigo: "Pending",
      zantel: "Registered",
    },
  ]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Vendors/MNO",
        accessor: "vendor",
      },
      {
        Header: "Vodacom",
        accessor: "vodacom",
        Cell: ({ row, column, value }) => {
          return (
            <div className="mb-3">
              <Field
                className="m-1"
                type="radio"
                inline={true}
                defaultChecked={value === "Not Registered" ? true : false}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Pending"
              />
              <Field
                className="m-1"
                type="radio"
                name={`registered_netowrks[${row.id}][${column.id}]`}
                inline={true}
                value="Registered"
              />
            </div>
          );
        },
      },
      {
        Header: "Airtel",
        accessor: "airtel",
        Cell: ({ row, column, value }) => {
          return (
            <div className="mb-3">
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Pending"
              />
              <Field
                className="m-1"
                type="radio"
                name={`registered_netowrks[${row.id}][${column.id}]`}
                inline={true}
                value="Registered"
              />
            </div>
          );
        },
      },
      {
        Header: "Halotel",
        accessor: "halotel",
        Cell: ({ row, column, value }) => {
          return (
            <div className="mb-3">
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Pending"
              />
              <Field
                className="m-1"
                type="radio"
                name={`registered_netowrks[${row.id}][${column.id}]`}
                inline={true}
                checked={value === "Registered" ? true : false}
                value="Registered"
              />
            </div>
          );
        },
      },
      {
        Header: "Zantel",
        accessor: "zantel",
        Cell: ({ row, column, value }) => {
          return (
            <div className="mb-3">
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Pending"
              />
              <Field
                className="m-1"
                type="radio"
                name={`registered_netowrks[${row.id}][${column.id}]`}
                inline={true}
                value="Registered"
              />
            </div>
          );
        },
      },
      {
        Header: "TTCL",
        accessor: "ttcl",
        Cell: ({ row, column, value }) => {
          return (
            <div className="mb-3">
              <Field
                className="m-1"
                type="radio"
                inline={true}
                checked={value === "Not Registered" ? true : false}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Pending"
              />
              <Field
                className="m-1"
                type="radio"
                name={`registered_netowrks[${row.id}][${column.id}]`}
                inline={true}
                value="Registered"
              />
            </div>
          );
        },
      },
      {
        Header: "Tigo",
        accessor: "tigo",
        Cell: ({ row, column, value }) => {
          return (
            <div className="mb-3">
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Pending"
              />
              <Field
                className="m-1"
                type="radio"
                name={`registered_netowrks[${row.id}][${column.id}]`}
                inline={true}
                value="Registered"
              />
            </div>
          );
        },
      },
      {
        Header: "Smile",
        accessor: "smile",
        Cell: ({ row, column, value }) => {
          return (
            <div className="mb-3">
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={`registered_netowrks[${row.id}][${column.id}]`}
                value="Pending"
              />
              <Field
                className="m-1"
                type="radio"
                name={`registered_netowrks[${row.id}][${column.id}]`}
                inline={true}
                value="Registered"
              />
            </div>
          );
        },
      },
    ],
    []
  );

  const data = React.useMemo(() => mnoData, [mnoData]);
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({ columns, data });
  let registered_networks = [];

  return (
    <Table {...getTableProps()} responsive>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={i++} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={column.Header}>
                <div className="mb-1">{column.render("Header")}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          console.log(row.original["vendor"]);
          return (
            <tr key={"row" + i++} {...row.getRowProps()}>
              {
                <FieldArray
                  name={`registered_networks[${row.id}]`}
                  render={(arrayHelpers) => (
                    <React.Fragment>
                      {row.cells.map((cell) => {
                        registered_networks[row.id] = { vendor: "ddd" };
                        return (
                          <td key={i++ + "datacell"} {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </React.Fragment>
                  )}
                />
              }
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MatrixRadioTable;
