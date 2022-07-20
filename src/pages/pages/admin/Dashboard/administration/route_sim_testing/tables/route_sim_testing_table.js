import React, { useEffect, useState } from "react";
import { Row, Table, Col, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import { Link } from "react-router-dom";
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
import {
  ColumnFilter,
  DateColumnFilter,
  EmptyColumnFilter,
} from "../../../../sender_ids/sender_id_table_extensions/ColumnFilter";
import axios from "axios";
const RouteSimTestingTable = () => {
  let i = 0;
  const [accountsData, setAccountsData] = useState({
    data: [
      {
        id: "1",
        email: "barakaurio@yahoo.com",
        phone_number: "0624327900",
        created_at: "2022-05-12 07:49:40",
        updated_at: "2022-05-12 07:49:40",
        status: "Trial",
        company_name: "Nexan Tech",
        company_email: "directors@nexantech.com",
        support_email: "support@nexantech.com",
        billing_email: "bills@nexantech.com",
      },
      {
        id: "2",
        email: "bakary@yahoo.com",
        phone_number: "0624327900",
        created_at: "2022-05-12 07:49:40",
        updated_at: "2022-05-12 07:49:40",
        status: "Activated",
        company_name: "BioLiv Tech",
        company_email: "directors@nexantech.com",
        support_email: "support@nexantech.com",
        billing_email: "bills@nexantech.com",
      },
      {
        id: "1",
        email: "barakaurio@yahoo.com",
        phone_number: "0624327900",
        created_at: "2022-05-12 07:49:40",
        updated_at: "2022-05-12 07:49:40",
        status: "Requests Activation",
        company_name: "Haki Elimu",
        company_email: "directors@nexantech.com",
        support_email: "support@nexantech.com",
        billing_email: "bills@nexantech.com",
      },
    ],
  });

  useEffect(() => {
    let accounts = [];

    async function getAccounts() {
      accounts = await axios.get("fetch_accounts");
      if (accounts.status === 200) {
        if (accounts.data) {
          setAccountsData({ data: [...accounts.data] });
        }
      }
    }
    getAccounts();
  }, []);

  const data = React.useMemo(() => accountsData.data, [accountsData.data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Test type",
        accessor: "test_type",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "DLR",
        accessor: "dlr",
        Filter: ColumnFilter,
      },
      {
        Header: "Phone",
        accessor: "phone",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Submit Date",
        accessor: "submit_date",
        Filter: DateColumnFilter,
      },
      {
        Header: "Sent Date",
        accessor: "sent_date",
        Filter: DateColumnFilter,
      },
      {
        Header: "DLR Date",
        accessor: "dlr_date",
        Filter: DateColumnFilter,
      },
      {
        Header: "SID Sent",
        accessor: "sender_id",
        Filter: ColumnFilter,
      },
      {
        Header: "Vendor",
        accessor: "vendor",
        Filter: ColumnFilter,
      },
      {
        Header: "Encoding",
        accessor: "encoding",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Error Code",
        accessor: "error_code",
        Filter: ColumnFilter,
      },
      {
        Header: "ERR Desc",
        accessor: "error_desc",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Text Sent",
        accessor: "text_sent",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "SMS ID",
        accessor: "sms_id",
        Filter: ColumnFilter,
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: ColumnFilter,
        Cell: ({ value, row }) => {
          if (value === "Activated") {
            return <strong className="text-success">Activated</strong>;
          } else if (value === "Trial") {
            return <span>Trial</span>;
          } else if (value === "Requests Activation") {
            return (
              <Link
                to={`/admin/manage_accounts/activate?id=${row.original.id}`}
                className="text-warning"
              >
                Requests Activation
              </Link>
            );
          } else {
            return <span className="text-danger">Unknown</span>;
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
          {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
        </Col>
      </Row>
      <Table {...getTableProps()} responsive>
        <thead className="thead-dark">
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

export default RouteSimTestingTable;
