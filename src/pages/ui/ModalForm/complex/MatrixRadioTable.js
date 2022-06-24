import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Row, Col, Table, Alert } from "react-bootstrap";

import { useTable } from "react-table";

const MatrixRadioTable = (props) => {
  let i = 0;
  const columns = React.useMemo(
    () => [
      {
        Header: "Vodacom",
        accessor: "vodacom",
        Cell: ({ row }) => {
          const mnos = { ...row.original.mnos };
          // console.log("vod", current_mno);
          return (
            <div className="mb-3">
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Not Registered"
              />
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Pending"
              />
              <Form.Check
                className="m-1"
                type="radio"
                name="myradio"
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
        Cell: ({ value }) => {
          return (
            <div className="mb-3">
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Not Registered"
              />
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Pending"
              />
              <Form.Check
                className="m-1"
                type="radio"
                name="myradio"
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
        Cell: ({ value }) => {
          return (
            <div className="mb-3">
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Not Registered"
              />
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Pending"
              />
              <Form.Check
                className="m-1"
                type="radio"
                name="myradio"
                inline={true}
                value="Registered"
              />
            </div>
          );
        },
      },
      {
        Header: "Zantel",
        accessor: "zantel",
        Cell: ({ value }) => {
          return (
            <div className="mb-3">
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Not Registered"
              />
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Pending"
              />
              <Form.Check
                className="m-1"
                type="radio"
                name="myradio"
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
        Cell: ({ value }) => {
          return (
            <div className="mb-3">
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Not Registered"
              />
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Pending"
              />
              <Form.Check
                className="m-1"
                type="radio"
                name="myradio"
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
        Cell: ({ value }) => {
          return (
            <div className="mb-3">
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Not Registered"
              />
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Pending"
              />
              <Form.Check
                className="m-1"
                type="radio"
                name="myradio"
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
        Cell: ({ value }) => {
          return (
            <div className="mb-3">
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Not Registered"
              />
              <Form.Check
                className="m-1"
                type="radio"
                inline={true}
                name="myradio"
                value="Pending"
              />
              <Form.Check
                className="m-1"
                type="radio"
                name="myradio"
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

  const data = React.useMemo(
    () => [
      {
        network: "Halotel",
        mnos: [
          { network: "Halotel", status: "Registered" },
          { network: "Airtel", status: "Registered" },
          { network: "TTCL", status: "Registered" },
          { network: "Smile", status: "Pending" },
        ],
      },
      {
        network: "Vodacom",
        mnos: [
          { network: "Halotel", status: "Registered" },
          { network: "Airtel", status: "Registered" },
          { network: "TTCL", status: "Registered" },
          { network: "Smile", status: "Pending" },
        ],
      },
      {
        network: "Tigo",
        mnos: [
          { network: "Halotel", status: "Pending" },
          { network: "Airtel", status: "Registered" },
          { network: "TTCL", status: "Registered" },
          { network: "Smile", status: "Pending" },
        ],
      },
      {
        network: "Smile",
        mnos: [
          { network: "Halotel", status: "Pending" },
          { network: "Airtel", status: "Not Registered" },
          { network: "TTCL", status: "Registered" },
          { network: "Smile", status: "Pending" },
        ],
      },
      {
        network: "Airtel",
        mnos: [
          { network: "Halotel", status: "Registered" },
          { network: "Airtel", status: "Registered" },
          { network: "TTCL", status: "Registered" },
          { network: "Smile", status: "Pending" },
        ],
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
    <React.Fragment>
      <Formik
        initialValues={{}}
        enableReinitialize={true}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log("Matrix Radion Table", values);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert className="my-3" variant="danger">
                {errors.submit}
              </Alert>
            )}
            <Table {...getTableProps()} responsive>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr key={i++} {...headerGroup.getHeaderGroupProps()}>
                    <td>Vendors/MNO</td>

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
                    <tr key={i++} {...row.getRowProps()}>
                      <td>{row.original["network"]}</td>
                      {row.cells.map((cell) => {
                        //   console.log("Matrix Table", cell);
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
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default MatrixRadioTable;
