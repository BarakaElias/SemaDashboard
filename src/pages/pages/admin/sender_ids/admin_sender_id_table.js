import React, { useMemo } from "react";
import { Row, Table, Col, Form, Button } from "react-bootstrap";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { Edit2, Trash, Calendar } from "react-feather";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  function DateColumnFilter({ column: { filterValue, setFilter } }) {
    return (
      <Form.Group className="mb-3">
        <Form.Control
          onChange={(event) => setFilter(event.target.value)}
          type="datetime-local"
          min="11/07/2021 19:30 21"
          placeholder=""
        />
      </Form.Group>
    );
  }

  function EmptyColumnFilter() {
    return <div className="mb-4">&nbsp;</div>;
  }

  function MnoColumnFilter() {
    return (
      <div className="d-inline-flex mb-2 w-100 justify-content-around">
        <div>
          <div
            style={{ width: "15px", height: "4px" }}
            className="bg-success rounded-circle"
          ></div>
          <p className="text-weight-light">Registered</p>
        </div>
        <div>
          <div
            style={{ width: "15px", height: "4px" }}
            className="bg-warning rounded-circle"
          ></div>
          Pending
        </div>
        <div>
          <div
            style={{ width: "15px", height: "4px" }}
            className="bg-danger rounded-circle"
          ></div>
          Not Allowed
        </div>
      </div>
    );
  }

  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    // const options = React.useMemo(() => {
    //   const options = new Set();
    //   preFilteredRows.forEach((row) => {
    //     options.add(row.values[id]);
    //   });
    //   return [...options.values()];
    // }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
      <Form.Group className="mb-3">
        <Form.Select
          value={filterValue}
          onChange={(e) => {
            setFilter(e.target.value || undefined);
          }}
        >
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </Form.Select>
      </Form.Group>
    );
  }

  //Table columns
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id", // accessor is the "key" in the data
        Filter: EmptyColumnFilter,
        disableSortby: true,
      },

      {
        Header: "Country",
        accessor: "country",
        Filter: ColumnFilter,
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
      },
      {
        Header: "Status",
        accessor: "status",
        filter: "includes",
        Filter: SelectColumnFilter,
      },
      {
        Header: "Date created",
        accessor: "date_created",
        Filter: DateColumnFilter,
      },
      {
        Header: "User",
        accessor: "user",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "MNO Registered",
        accessor: "mno",
        maxWidth: 50,
        Filter: MnoColumnFilter,
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
      {
        Header: "Actions",
        accessor: "actions",
        Filter: EmptyColumnFilter,
        disableSortby: true,
        Cell: ({ value, row }) =>
          value == null
            ? "No actions"
            : value.map((action) => {
                const data = row.original;
                let link = "/edit-sender-id/";
                link += data.id;
                if (action === "edit") {
                  return (
                    <Link to={link}>
                      <Edit2 className="m-3" size={24} />
                    </Link>
                  );
                }
                if (action === "delete") {
                  return <Trash className="m-3" size={24} />;
                } else {
                  return "";
                }
              }),
      },
    ],
    []
  );
  //End of Table columns

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
        <Col lg={9}>
          <h1>Sema Sender IDs</h1>
          <h6 className="text-muted">List of all Client Sender IDS</h6>
        </Col>
        <Col lg={3}>
          <Row>
            <Col lg={7}>
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </Col>
            <Col lg={5}>
              <div className="mb-2">&nbsp;</div>
              <Button variant="info" size="lg" className="mb-3">
                Create Sender ID
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Table {...getTableProps()} responsive>
          <thead className="thead-dark">
            {
              //Loop over the header rows
              headerGroups.map((headerGroup) => (
                //apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    //loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      //Apply the header cell props

                      <th>
                        <div
                          className="mb-1"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {
                            //Render the header
                            column.render("Header")
                          }
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <FontAwesomeIcon
                                  className="ms-2"
                                  icon={faSortDown}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  className="ms-2"
                                  icon={faSortUp}
                                />
                              )
                            ) : (
                              <FontAwesomeIcon className="ms-2" icon={faSort} />
                            )}
                          </span>
                        </div>
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody className="table-hover" {...getTableBodyProps()}>
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
