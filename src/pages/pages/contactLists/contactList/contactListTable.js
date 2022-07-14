import React, { useContext, useEffect, useState } from "react";
import { Row, Table, Col } from "react-bootstrap";
import axios from "axios";
import { Trash } from "react-feather";
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
  EmptyColumnFilter,
} from "../../admin/sender_ids/sender_id_table_extensions/ColumnFilter";
import NotyfContext from "../../../../contexts/NotyfContext";

const ContactListTable = () => {
  const [contactListData, setContactListData] = useState({
    data: [
      {
        id: "1",
        name: "Baraka Elias",
        phone_number: "255624327900",
      },
      {
        id: "1",
        name: "Baraka Elias",
        phone_number: "255624327900",
      },
      {
        id: "1",
        name: "Baraka Elias",
        phone_number: "255624327900",
      },
      {
        id: "1",
        name: "Baraka Elias",
        phone_number: "255624327900",
      },
      {
        id: "1",
        name: "Baraka Elias",
        phone_number: "255624327900",
      },
    ],
  });

  const notyf = useContext(NotyfContext);

  useEffect(() => {
    async function getContacts() {
      const contacts = await axios.get("", {});
      if (contacts.status === 200) {
        setContactListData({ data: [...contacts.data] });
      }
    }
    // getContacts();
  }, []);

  const data = React.useMemo(
    () => contactListData.data,
    [contactListData.data]
  );

  const deleteContact = async () => {
    try {
      const deletedContact = await axios.post(
        "https://api.sema.co.tz/api/DeleteContact",
        {
          api_id: "API213160153",
          api_password: "ForDemoClient123",
          contact_id: 1,
        }
      );
      if (deletedContact.status === 200) {
        const updatedContactList = [...contactListData.data];
        const indexToRemove = updatedContactList.indexOf("contact_id");
        if (indexToRemove !== -1) {
          updatedContactList.splice(indexToRemove, 1);
          setContactListData({ data: updatedContactList });
          notyf.succes("Contact Removed");
        } else {
          notyf.error("Cannot find contact list. Refresh the page");
        }
      }
    } catch (e) {
      console.log("Deletecontact from contactlist", e);
      notyf.error(e.message);
    }
  };

  const columns = React.useMemo(() => [
    {
      Header: "#",
      accessor: "id",
      Filter: EmptyColumnFilter,
    },
    {
      Header: "Name",
      accessor: "name",
      Filter: ColumnFilter,
    },
    {
      Header: "Phone number",
      accessor: "phone_number",
      Filter: EmptyColumnFilter,
    },
    {
      Header: "Action",
      accessor: "",
      Filter: EmptyColumnFilter,
      Cell: ({ row }) => (
        <Trash onClieck={deleteContact} className="align-middle" size={18} />
      ),
    },
  ]);

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

  // const { globalFilter } = state;
  const { pageIndex } = state;

  let i = 0;

  return (
    <Row>
      <h1>Contact Lists</h1>
      <h6 className="text-muted">List of contacts</h6>
      <Table {...getTableProps()} responsive>
        <thead>
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
                    <td key={row.id} {...cell.getCellProps()}>
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
    </Row>
  );
};

export default ContactListTable;
