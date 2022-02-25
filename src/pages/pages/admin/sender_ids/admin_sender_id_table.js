import React, { useMemo, useState } from "react";
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
import CountryList from "./../../messaging/manage/senderID/countryList";
import ModalForm from "../../../ui/ModalForm/modalForm";
import AlertDialog from "../../../ui/AlertDialog/AlertDialog";
import axios from "axios";

const Admin_sender_id_table = () => {
  //Modal State
  const [modalState, setModalState] = useState({
    modalOpen: false,
    alertOpen: false,
    alertContent: "",
  });

  let sid_to_delete = "";

  const closeModal = () => {
    setModalState({ modalOpen: false });
  };
  let modalFormElements = {
    title: {
      value: "Add a New Sender ID",
    },
    country: {
      type: "select",
      label: "Sender ID Country",
      placeHolder: "Select sender ID country",
      required: true,
      options: CountryList,
      value: "hi",
    },
    sender_id: {
      label: "Sender ID Name",
      type: "text",
      placeHolder: "Enter Sender ID",
      required: true,
      options: null,
      value: "dddd",
    },
    active: {
      label: "Active",
      type: "checkbox",
      value: "Active",
    },
    vodacom: {
      label: "Vodacom",
      type: "select",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    halotel: {
      label: "Halotel",
      type: "select",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    tigo: {
      label: "Tigo",
      type: "select",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    zantel: {
      label: "Zantel",
      type: "select",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    smile: {
      label: "Smile",
      type: "select",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    airtel: {
      label: "Airtel",
      type: "select",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    submitButton: {
      type: "button",
      placeHolder: "Add Sender ID",
    },
  };
  const [modalFormState, setModalFormState] = useState({
    formState: modalFormElements,
  });

  const onAddButtonClicked = () => {
    setModalState({ modalOpen: true });
  };
  const onEditButtonClicked = (id) => {
    // setModalState({ modalOpen: true });
    const sender_ids = sid_data.filter((sid) => sid.id === id);
    const sender_id = sender_ids[0];
    Object.keys(modalFormElements).map((key) => {
      switch (key) {
        case "country":
          modalFormElements[key].value = sender_id.country;
          break;
        case "sender_id":
          modalFormElements[key].value = sender_id.name;
          break;
        case "vodacom":
          const mno = sender_id.mno.filter((mno) => mno.name == "Vodacom");
          modalFormElements[key].value = mno.status;
          break;
        case "Airtel":
          const airtel = sender_id.mno.filter((mno) => mno.name == "Airtel");
          modalFormElements[key].value = airtel.status;
          break;
        case "Tigo":
          const tigo = sender_id.mno.filter((mno) => mno.name == "Tigo");
          modalFormElements[key].value = tigo.status;
          break;
        case "zantel":
          const zantel = sender_id.mno.filter((mno) => mno.name == "Zantel");
          modalFormElements[key].value = zantel.status;
          break;
        case "halotel":
          const halotel = sender_id.mno.filter((mno) => mno.name == "Halotel");
          modalFormElements[key].value = halotel.status;
          break;
        case "smile":
          const vodacom = sender_id.mno.filter((mno) => mno.name == "vodacom");
          modalFormElements[key].value = vodacom.status;
          break;
        default:
          break;
      }
    });
    setModalFormState({ modalForm: modalFormElements });
    setModalState({ modalOpen: true });
    console.log(sender_id);
    console.log(modalFormState.formState);
  };

  const addSenderID = (parameters) => {
    axios
      .post("url", { params: parameters })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let form = modalState.modalOpen ? (
    <ModalForm
      content={modalFormState.formState}
      closeModalFunc={closeModal}
      submitFormFunc={addSenderID}
    />
  ) : null;

  //Alert Diaolog data
  const alertDialogContent = {
    type: "Certainty",
    title: "Are you sure?",
    message:
      "Do you really want to delete this sender id " +
      modalState.alertContent +
      "?",
  };
  const closeAlertModal = () => {
    setModalState({ alertOpen: false });
  };

  const openAlertModal = (sid_name, dd) => {
    setModalState({ alertOpen: true, alertContent: sid_name });
  };

  const deleteSenderID = () => {
    console.log("Deleteing");
  };

  let dialog = modalState.alertOpen ? (
    <AlertDialog
      content={alertDialogContent}
      closeAlertFunc={closeAlertModal}
      sendSMSFunc={deleteSenderID}
    />
  ) : null;

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
        Filter: EmptyColumnFilter,
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
                    <Edit2
                      onClick={() => onEditButtonClicked(data.id)}
                      className="m-3"
                      size={24}
                    />
                  );
                }
                if (action === "delete") {
                  return (
                    <Trash
                      onClick={() => openAlertModal(data.name, data.id)}
                      className="m-3"
                      size={24}
                    />
                  );
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
      {form}
      {dialog}
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
              <Button
                onClick={onAddButtonClicked}
                variant="info"
                size="lg"
                className="mb-3"
              >
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
