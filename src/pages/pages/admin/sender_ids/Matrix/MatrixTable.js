import React from "react";
import { Row, Table, Badge } from "react-bootstrap";
import { useTable } from "react-table";

const MatrixTable = (props) => {
  const mno_data = [...props.data];
  const raw_data = React.useMemo(() => mno_data, []);
  // const data = React.useMemo(() => {}, []);
  const row_data = [];

  console.log("Before processing:", raw_data);

  raw_data.map((r_data) => {
    console.log(r_data);
    const dd = {
      // [r_data.registerer.toLowerCase()]: {
      //   network: r_data.network,
      //   status: r_data.status,
      // },
      [r_data.registerer.toLowerCase()]: r_data.status,
      vendor: r_data.network,
    };
    console.log(dd);
    row_data.push(dd);
  });

  console.log(row_data);
  const data = React.useMemo(() => row_data, []);
  const registerState = (value, column) => {
    if (column !== undefined) {
    }
    switch (value) {
      case "Registered":
        return (
          <div className="d-flex justify-content-center">
            <div
              style={{ height: "20px", width: "20px" }}
              className="rounded-circle bg-success"
            >
              &nbsp;
            </div>
          </div>
        );
      case "Not Registered":
        return (
          <div className="d-flex justify-content-center">
            <div
              style={{ height: "20px", width: "20px" }}
              className="rounded-circle bg-light"
            >
              &nbsp;
            </div>
          </div>
        );
      case "Pending":
        return (
          <div className="d-flex justify-content-center">
            <div
              style={{ height: "20px", width: "20px" }}
              className="rounded-circle bg-warning"
            >
              &nbsp;
            </div>
          </div>
        );
      default:
        return (
          <div className="d-flex justify-content-center">
            <div
              style={{ height: "20px", width: "20px" }}
              className="rounded-circle bg-light"
            >
              &nbsp;
            </div>
          </div>
        );
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Vendor/MNO",
        accessor: "vendor",
      },
      {
        Header: "Vodacom",
        accessor: "vodacom",
        Cell: ({ value, column }) => registerState(value, column),
      },
      {
        Header: "Tigo",
        accessor: "tigo",
        Cell: ({ value }) => registerState(value),
      },
      {
        Header: "Airtel",
        accessor: "airtel",
        Cell: ({ value }) => registerState(value),
      },
      {
        Header: "Halotel",
        accessor: "halotel",
        Cell: ({ value }) => registerState(value),
      },
      {
        Header: "Zantel",
        accessor: "zantel",
        Cell: ({ value }) => registerState(value),
      },
      {
        Header: "TTCL",
        accessor: "ttcl",
        Cell: ({ value }) => registerState(value),
      },
      {
        Header: "Smile",
        accessor: "smile",
        Cell: ({ value }) => registerState(value),
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
        <Table {...getTableProps()} className="table table-borderless m-1">
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
      </Row>
    </React.Fragment>
  );
};
export default MatrixTable;
