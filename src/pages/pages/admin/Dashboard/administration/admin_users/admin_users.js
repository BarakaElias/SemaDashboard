import React, { useState, useEffect } from "react";
import { Card, Row, Container, Col, Button, Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import {
  //   faDelete,
  faKey,
  faEdit,
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EmptyColumnFilter,
  ColumnFilter,
} from "../../../sender_ids/sender_id_table_extensions/ColumnFilter";
import ModalForm from "../../../../../ui/ModalForm/modalForm";
import { formValuesValidation } from "./form_values";
const AdminUsers = () => {
  const [adminUsers, setAdminUsers] = useState({
    data: [
      {
        role: "Support-1",
        username: "marcela@aimfirms.com",
        first_name: "Marcela",
        last_name: "Carlos",
        active: "Active",
        created: "3/15/2021 10:54:30 AM",
        last_login: "7/18/2022 11:46:58 AM",
        id: "3",
      },
    ],
  });

  const createUserInitialFormValues = {
    role: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    active: "",
  };

  const [modalState, setModalState] = useState({
    modalOpen: false,
  });

  const closeModal = () => {
    setModalState({ modalOpen: false });
  };

  const modalFormElements = {
    title: {
      value: "Add New Admin User",
    },
    role: {
      type: "select",
      label: "User Role",
      placeHolder: "Select user role",
      required: true,
      options: ["Admin", "Support-1"],
      value: "",
    },
    username: {
      type: "text",
      label: "Username",
      placeHolder: "bk@company.com",
      required: true,
      options: null,
      value: "",
    },
    first_name: {
      type: "text",
      label: "First Name",
      placeHolder: "",
      required: true,
      options: null,
      value: "",
    },
    last_name: {
      type: "text",
      label: "Last name",
      placeHolder: "",
      required: true,
      options: null,
      value: "",
    },
    email: {
      type: "text",
      label: "Email",
      placeHolder: "jj@company.com",
      required: true,
      options: null,
      value: "",
    },
    active: {
      label: "Active",
      type: "checkbox",
      value: "Active",
    },
    submitButton: {
      type: "button",
      placeHolder: "Create New Admin User",
    },
  };

  const [modalFormState, setModalFormState] = useState({
    formState: modalFormElements,
  });
  const [initialFormState, setFormState] = useState({
    initialValues: { ...createUserInitialFormValues },
  });
  const onAddButtonClicked = () => {
    console.log("cliecked");
    setFormState({ initialValues: { ...createUserInitialFormValues } });
    setModalState({ modalOpen: true });
  };
  const addAdminUser = (params) => {
    console.log("Adding Admin user", params);
  };

  let form = modalState.modalOpen ? (
    <ModalForm
      initialValues={initialFormState.initialValues}
      validationSchema={formValuesValidation}
      content={modalFormState.formState}
      closeModalFunc={closeModal}
      submitFormFunc={addAdminUser}
    />
  ) : null;

  const data = React.useMemo(() => adminUsers.data, [adminUsers.data]);
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "edit",
        Cell: () => <FontAwesomeIcon icon={faEdit} />,
        Filter: EmptyColumnFilter,
      },
      {
        Header: "",
        accessor: "delete",
        Cell: () => <FontAwesomeIcon icon={faEdit} />,
        Filter: EmptyColumnFilter,
      },
      {
        Header: "",
        accessor: "auth",
        Cell: () => <FontAwesomeIcon icon={faKey} />,
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Role",
        accessor: "role",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Username",
        accessor: "username",
        Filter: ColumnFilter,
      },
      {
        Header: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Active",
        accessor: "active",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Created",
        accessor: "created",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "Last Login",
        accessor: "last_login",
        Filter: EmptyColumnFilter,
      },
      {
        Header: "ID",
        accessor: "id",
        Filter: EmptyColumnFilter,
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
  let i = 0;
  return (
    <React.Fragment>
      {form}
      <Helmet title="Activate Account" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Admin Users</h1>
        <Row>
          <Card>
            <Card.Header tag="h5">
              <Button onClick={onAddButtonClicked} size="lg" variant="success">
                Add New User
              </Button>
            </Card.Header>
            <Card.Body className="m-sm-4">
              <Row>
                <Col md={12}>
                  <Table {...getTableProps()} responsive>
                    <thead className="thead-dark">
                      {headerGroups.map((headerGroup) => (
                        <tr key={i++} {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th key={column.Header}>
                              <div
                                className="mb-1"
                                {...column.getHeaderProps(
                                  column.getSortByToggleProps()
                                )}
                              >
                                {column.render("Header")}
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
                                    <FontAwesomeIcon
                                      className="ms-2"
                                      icon={faSort}
                                    />
                                  )}
                                </span>
                              </div>
                              <div>
                                {column.canFilter
                                  ? column.render("Filter")
                                  : null}
                              </div>
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
                                <td
                                  key={i++ + "datacell"}
                                  {...cell.getCellProps()}
                                >
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
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AdminUsers;
