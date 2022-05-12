import React, { useState } from "react";
import { Row, Table, Col, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalFilter } from "./table_extenstions/GlobalFilter";
import {
  ColumnFilter,
  EmptyColumnFilter,
  DateColumnFilter,
} from "../../sender_ids/sender_id_table_extensions/ColumnFilter";
// import { GlobalFilter } from "../../sender_ids/sender_id_table_extensions/GlobalFilter";

const NewAccountsTable = () => {
  let i = 0;
  const data = React.useMemo(
    () => [
      {
        id: "1",
        full_name: "Baraka Urio",
        email: "barakaurio@yahoo.com",
        phone_number: "0624327900",
        created_at: "2022-05-12 07:49:40",
        status: "Trial",
      },
      {
        id: "2",
        full_name: "Isaac Urio",
        email: "isaacurio@yahoo.com",
        phone_number: "0624327900",
        created_at: "2022-05-10 07:49:40",
        status: "Activated",
      },
      {
        id: "3",
        full_name: "Marcella Carlos",
        email: "marcellacarolos@yahoo.com",
        phone_number: "0624327900",
        created_at: "2022-05-12 07:49:40",
        status: "Trial",
      },
      {
        id: "4",
        full_name: "John Doe",
        email: "johndoe@yahoo.com",
        phone_number: "0624327900",
        created_at: "2022-05-10 07:49:40",
        status: "Activated",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Full name",
        accessor: "full_name",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Email",
        accessor: "email",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Phone number",
        accessor: "phone_number",
        Filter: ColumnFilter,
      },
      {
        Header: "Created at",
        accessor: "created_at",
        Filter: DateColumnFilter,
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: ColumnFilter,
        Cell: ({ value }) => {
          if (value === "Activated") {
            return <strong className="text-success">Activated</strong>;
          } else if (value === "Trial") {
            return <span>Trial</span>;
          }
        },
      },
    ],
    []
  );

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
    pagecount,
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
        <Col></Col>
        <Col md={5}>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Col>
      </Row>
      <Table {...getTableProps()} responsive>
        <thead className="thead-darkk">
          {headerGroups.map((headerGroup) => (
            <tr key={i++} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.Header}>
                  <div
                    className="mb-1"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FontAwesomeIcon className="ms-2" icon={faSortDown} />
                        ) : (
                          <FontAwesomeIcon className="ms-2" icon={faSortUp} />
                        )
                      ) : (
                        <FontAwesomeIcon className="ms-2" icon={faSort} />
                      )}
                    </span>
                  </div>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="table-hover" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr key={i++} {...row.getRowProps()}>
                {row.cells.map((cell) => {
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
              onClick={() => gotoPage(pagecount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default NewAccountsTable;
