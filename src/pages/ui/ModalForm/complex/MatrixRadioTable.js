import React, { useState } from "react";
import { Field, FieldArray } from "formik";
import { Form, Row, Col, Table, Alert } from "react-bootstrap";

import { useTable } from "react-table";

const MatrixRadioTable = (props) => {
  let i = 0;
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
                name={column.Header + "-" + row.original.vendor}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={column.Header + "-" + row.original.vendor}
                value="Pending"
                defaultChecked={value === "Pending" ? true : false}
              />
              <Field
                className="m-1"
                type="radio"
                name={column.Header + "-" + row.original.vendor}
                inline={true}
                defaultChecked={value === "Registered" ? true : false}
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
                checked={value === "Not Registered" ? true : false}
                name={column.Header + "-" + row.original.vendor}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={column.Header + "-" + row.original.vendor}
                value="Pending"
                checked={value === "Pending" ? true : false}
              />
              <Field
                className="m-1"
                type="radio"
                name={column.Header + "-" + row.original.vendor}
                inline={true}
                checked={value === "Registered" ? true : false}
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
                checked={value === "Not Registered" ? true : false}
                name={column.Header + "-" + row.original.vendor}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={column.Header + "-" + row.original.vendor}
                value="Pending"
                checked={value === "Pending" ? true : false}
              />
              <Field
                className="m-1"
                type="radio"
                name={column.Header + "-" + row.original.vendor}
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
                checked={value === "Not Registered" ? true : false}
                name={column.Header + "-" + row.original.vendor}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={column.Header + "-" + row.original.vendor}
                value="Pending"
                checked={value === "Pending" ? true : false}
              />
              <Field
                className="m-1"
                type="radio"
                name={column.Header + "-" + row.original.vendor}
                inline={true}
                checked={value === "Registered" ? true : false}
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
                name={column.Header + "-" + row.original.vendor}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={column.Header + "-" + row.original.vendor}
                value="Pending"
                checked={value === "Pending" ? true : false}
              />
              <Field
                className="m-1"
                type="radio"
                name={column.Header + "-" + row.original.vendor}
                inline={true}
                checked={value === "Registered" ? true : false}
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
                checked={value === "Not Registered" ? true : false}
                name={column.Header + "-" + row.original.vendor}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={column.Header + "-" + row.original.vendor}
                value="Pending"
                checked={value === "Pending" ? true : false}
              />
              <Field
                className="m-1"
                type="radio"
                name={column.Header + "-" + row.original.vendor}
                inline={true}
                checked={value === "Registered" ? true : false}
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
                checked={value === "Not Registered" ? true : false}
                name={column.Header + "-" + row.original.vendor}
                value="Not Registered"
              />
              <Field
                className="m-1"
                type="radio"
                inline={true}
                name={column.Header + "-" + row.original.vendor}
                value="Pending"
                checked={value === "Pending" ? true : false}
              />
              <Field
                className="m-1"
                type="radio"
                name={column.Header + "-" + row.original.vendor}
                inline={true}
                checked={value === "Registered" ? true : false}
                value="Registered"
              />
            </div>
          );
        },
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        vendor: "Halotel",
        vodacom: "Registered",
        halotel: "Registered",
        airtel: "Registered",
      },
      {
        vendor: "Vodacom",
        vodacom: "Registered",
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
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    rows,
  } = useTable({ columns, data });

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
          return (
            <FieldArray name="registered_networks">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                var { registered_networks } = values;
                console.log("inside field array", registered_networks);
                return (
                  <tr key={i++} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      registered_networks.map((vendor) => {
                        return (
                          <td key={i++ + "datacell"} {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      });
                    })}
                  </tr>
                );
              }}
            </FieldArray>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MatrixRadioTable;
