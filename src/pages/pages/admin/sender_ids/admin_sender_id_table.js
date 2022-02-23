import React, { useMemo } from "react";
import { Row, Table, Col } from "react-bootstrap";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { Edit2, Trash } from "react-feather";
import { Link } from "react-router-dom";
import { ColumnFilter } from "./ColumnFilter";
import { GlobalFilter } from "./GlobalFilter";
import sid_data from "./sid_data";

const Admin_sender_id_table = () => {
  //Table data
  const data = React.useMemo(
    () => sid_data,

    []
  );
  //End of Table data

  //Table columns
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id", // accessor is the "key" in the data
        Filter: ColumnFilter,
        disableFilters: true,
      },

      {
        Header: "Country",

        accessor: "country",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Date created",
        accessor: "date_created",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "User",
        accessor: "user",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "MNO Registered",
        accessor: "mno",
        maxWidth: 50,
        disableFilters: true,
        Filter: ColumnFilter,
        Cell: ({ value }) =>
          value == null
            ? "No Registered Networks"
            : value.map((vendor) => {
                let classNameVals = "";
                switch (vendor.status) {
                  case "Registered":
                    classNameVals =
                      "font-weight-bold rounded text-white m-2 p-2 bg-success";
                    break;
                  case "Pending":
                    classNameVals =
                      "font-weight-bold rounded text-white m-2 p-2 bg-warning";
                    break;
                  case "Not Allowed":
                    classNameVals =
                      "font-weight-bold rounded text-white m-2 p-2 bg-danger";
                    break;
                  default:
                    classNameVals =
                      "font-weight-bold rounded text-white m-2 p-2 bg-light";
                    break;
                }

                return (
                  <div className={classNameVals}>{String(vendor.name)}</div>
                );
              }),
      },
    ],

    []
  );
  //End of Table columns

  //Filtering
  //Active or Inactive
  // const ColumnFilter = ({ column }) => {
  //   const { filterValue, setFilter } = column;
  //   return (
  //     <span>
  //       Search:{" "}
  //       <input
  //         value={filterValue || ""}
  //         onChange={(e) => setFilter(e.target.value)}
  //       />
  //     </span>
  //   );
  // };

  //Instantiating the table

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;
  const { pageIndex } = state;
  return (
    <React.Fragment>
      <Row>
        <Col lg={8}>
          <h1>Sema Sender IDs</h1>
          <h6 className="text-muted">List of all Client Sender IDS</h6>
        </Col>
        <Col lg={2}>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Col>
      </Row>
      <Row>
        <Table {...getTableProps()} responsive>
          <thead>
            {
              //Loop over the header rows
              headerGroups.map((headerGroup) => (
                //apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    //loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      //Apply the header cell props

                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {
                          //Render the header
                          column.render("Header")
                        }
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>

                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? "Desc"
                              : "Asc"
                            : ""}
                        </span>
                      </th>
                    ))
                  }
                  <th>Actions</th>
                </tr>
              ))
            }
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              //Loop over the table rows
              page.map((row) => {
                //Prepare the row for display
                prepareRow(row);
                return (
                  //Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      //Loop over the rows cells
                      row.cells.map((cell) => {
                        //Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            <div className="d-inline-flex flex-wrap">
                              {
                                //Render the cell contents
                                cell.render("Cell")
                              }
                            </div>
                          </td>
                        );
                      })
                    }
                    <td>
                      <Link to="#">
                        <Edit2 className="m-3" size={24} />
                      </Link>
                      <Trash className="m-3" size={24} />
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
        <Row>
          <Col md={8}></Col>
          <Col md={4}>
            <div>
              <span>
                page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>
              </span>
              <button
                className="btn"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </button>
              <button
                className="btn"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </button>
              <button
                className="btn"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
              <button
                className="btn"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>
            </div>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default Admin_sender_id_table;
