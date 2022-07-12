import React, { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { useTable } from "react-table";

const MatrixTable = (props) => {
  const mno_data = props.data != null ? [...props.data] : null;
  const [mnoData, setMnoData] = useState({
    data: [
      { vendor: "Halotel" },
      { vendor: "Vodacom" },
      { vendor: "Airtel" },
      { vendor: "Zantel" },
    ],
  });

  useEffect(() => {
    if (mno_data !== null) {
      setMnoData({ data: [...mno_data] });
    }
  }, []);

  let MatrixReturn = <div>No Data</div>;

  const data = React.useMemo(() => mnoData.data, [mnoData.data]);

  console.log("inside matrix", data);

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

  // if (data === null) {
  //   data;
  // }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  let i = 0;
  if (data === null) {
    MatrixReturn = <div>No data</div>;
  } else {
    MatrixReturn = (
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
  }

  console.log("mno data matrix", mno_data);
  return MatrixReturn;
};
export default MatrixTable;
