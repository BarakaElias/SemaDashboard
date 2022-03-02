import React, { useState } from "react";
import { Row, Table, Col, Button } from "react-bootstrap";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useExpanded,
} from "react-table";
import { Edit2, Trash, Eye, EyeOff } from "react-feather";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ColumnFilter,
  SelectColumnFilter,
  EmptyColumnFilter,
} from "./sender_id_table_extensions/ColumnFilter";
import { GlobalFilter } from "./sender_id_table_extensions/GlobalFilter";
import sid_data from "./sid_data";
import CountryList from "./../../messaging/manage/senderID/countryList";
import ModalForm from "../../../ui/ModalForm/modalForm";
import AlertDialog from "../../../ui/AlertDialog/AlertDialog";
import axios from "axios";
// import Matrix from "./Matrix/Matrix";
import MatrixTable from "./Matrix/MatrixTable";
import {
  createSenderIdInitialFormValues,
  formValuesValidation,
} from "./sender_id_table_extensions/FormikForm";

const AdminSenderIdTable = () => {
  //Modal State
  const [modalState, setModalState] = useState({
    modalOpen: false,
    alertOpen: false,
    alertContent: "",
  });

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
    sender_name: {
      label: "Sender ID Name",
      type: "text",
      placeHolder: "Enter Sender ID",
      required: true,
      options: null,
      value: "dddd",
    },
    isActive: {
      label: "Active",
      type: "checkbox",
      value: "Active",
    },
    Vodacom: {
      label: "Vodacom",
      type: "two-times-selection",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    Halotel: {
      label: "Halotel",
      type: "two-times-selection",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    Tigo: {
      label: "Tigo",
      type: "two-times-selection",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    Zantel: {
      label: "Zantel",
      type: "two-times-selection",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    Smile: {
      label: "Smile",
      type: "two-times-selection",
      placeHolder: "Registration state",
      required: true,
      options: ["Registered", "Pending", "Not Allowed"],
      value: "",
    },
    Airtel: {
      label: "Airtel",
      type: "two-times-selection-2",
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
          const mno = sender_id.mno.filter((mno) => mno.name === "Vodacom");
          modalFormElements[key].value = mno.status;
          break;
        case "Airtel":
          const airtel = sender_id.mno.filter((mno) => mno.name === "Airtel");
          modalFormElements[key].value = airtel.status;
          break;
        case "Tigo":
          const tigo = sender_id.mno.filter((mno) => mno.name === "Tigo");
          modalFormElements[key].value = tigo.status;
          break;
        case "zantel":
          const zantel = sender_id.mno.filter((mno) => mno.name === "Zantel");
          modalFormElements[key].value = zantel.status;
          break;
        case "halotel":
          const halotel = sender_id.mno.filter((mno) => mno.name === "Halotel");
          modalFormElements[key].value = halotel.status;
          break;
        case "smile":
          const vodacom = sender_id.mno.filter((mno) => mno.name === "vodacom");
          modalFormElements[key].value = vodacom.status;
          break;
        default:
          break;
      }
      return null;
    });
    setModalFormState({ modalForm: modalFormElements });
    setModalState({ modalOpen: true });
    // console.log(sender_id);
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
  //For the modal form
  let form = modalState.modalOpen ? (
    <ModalForm
      initialValues={createSenderIdInitialFormValues}
      validationSchema={formValuesValidation}
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
  let i = 0;

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
      // {
      //   Header: "Date created",
      //   accessor: "date_created",
      //   Filter: EmptyColumnFilter,
      // },
      {
        Header: "User",
        accessor: "user",
        Filter: EmptyColumnFilter,
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

                if (action === "edit") {
                  return (
                    <Edit2
                      onClick={() => onEditButtonClicked(data.id)}
                      className="m-3"
                      size={24}
                    />
                  );
                } else if (action === "delete") {
                  return (
                    <Trash
                      onClick={() => openAlertModal(data.name, data.id)}
                      className="m-3"
                      size={24}
                    />
                  );
                } else if (action === "view") {
                  return (
                    <span
                      {...row.getToggleRowExpandedProps()}
                      onClick={() => row.toggleRowExpanded()}
                    >
                      {row.isExpanded ? (
                        <EyeOff className="m-3" size={22} />
                      ) : (
                        <Eye className="m-3" size={24} />
                      )}
                    </span>
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
    visibleColumns,
    gotoPage,
    pageCount,
    prepareRow,
    // state: { expanded },
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );
  // setPageSize(8);

  const renderRowSubComponent = React.useCallback(
    (data) => <MatrixTable data={data.row.original.mno} />,
    []
  );
  const { globalFilter } = state;
  const { pageIndex } = state;
  return (
    <React.Fragment>
      {form}
      {dialog}
      <Row>
        <Col lg={7}>
          <h1>Sema Sender IDs</h1>
          <h6 className="text-muted">List of all Client Sender IDS</h6>
        </Col>
        <Col lg={5}>
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

                <tr key={i++} {...headerGroup.getHeaderGroupProps()}>
                  {
                    //loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      //Apply the header cell props

                      <th key={column.Header}>
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
                  <React.Fragment key={i++ + "datarow"}>
                    <tr {...row.getRowProps()}>
                      {
                        //Loop over the rows cells
                        row.cells.map((cell) => {
                          //Apply the cell props
                          return (
                            <td key={i++ + "datacell"} {...cell.getCellProps()}>
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
                    {row.isExpanded ? (
                      <tr className="bg-light">
                        <td
                          className="text-center"
                          colSpan={visibleColumns.length}
                        >
                          <Row>
                            <Col lg={3}></Col>
                            <Col>{renderRowSubComponent({ row })}</Col>
                            <Col lg={3}></Col>
                          </Row>
                        </td>
                      </tr>
                    ) : null}
                  </React.Fragment>
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

export default AdminSenderIdTable;
