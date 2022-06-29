import React, { useEffect, useState, useContext } from "react";
import { Row, Table, Col, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
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
import useAuth from "./../../../../hooks/useAuth";
// import Matrix from "./Matrix/Matrix";
import MatrixTable from "./Matrix/MatrixTable";
import {
  createSenderIdInitialFormValues,
  formValuesValidation,
} from "./sender_id_table_extensions/FormikForm";
import NotyfContext from "../../../../contexts/NotyfContext";

const AdminSenderIdTable = () => {
  const { user } = useAuth();
  const notyf = useContext(NotyfContext);
  const [sidData, setSidData] = useState({
    data_values: [...sid_data],
  });

  useEffect(() => {
    function getIds() {
      axios
        .get("http://localhost/semaapi/public/api/list_senders")
        .then((res) => {
          // sid_data = [...res.data];
          setSidData({ data_values: [...res.data] });
        })
        .catch((e) => console.log("getsender", e));
    }
    // getIds();
  }, []);
  //Modal State
  const [modalState, setModalState] = useState({
    modalOpen: false,
    alertOpen: false,
    alertContent: "",
    senderIdToDelete: "",
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
    registered_networks: {
      label: "MNO Registration Stauts",
      type: "mno-matrix",
      placeHolder: "Registration state",
      required: false,
      options: ["Registered", "Pending", "Not Allowed"],
      value: [],
    },
    submitButton: {
      type: "button",
      placeHolder: "Add Sender ID",
    },
  };
  const [modalFormState, setModalFormState] = useState({
    formState: modalFormElements,
  });
  const [initialFormState, setFormState] = useState({
    initialValues: { ...createSenderIdInitialFormValues },
  });
  const [senderCountry, setSenderCountry] = useState({});

  const onAddButtonClicked = () => {
    setFormState({ initialValues: { ...createSenderIdInitialFormValues } });
    setModalState({ modalOpen: true });
  };
  const onEditButtonClicked = (data) => {
    // setModalState({ modalOpen: true });
    // const sender_ids = sid_data.filter((sid) => sid.id === id);
    // const sender_id = sender_ids[0];

    const initialValues = { ...createSenderIdInitialFormValues };
    initialValues["id"] = data.id;
    initialValues.sender_name = data.name;
    initialValues.country = data.country;
    initialValues.status = data.status;
    initialValues.registered_networks = data.registered_networks;

    // createSenderIdInitialFormValues = { ...initialValues };
    // console.log(initialValues);
    // console.log("edit", initialValues);

    setFormState({ initialValues: initialValues });
    // console.log(initialFormState.initialValues);
    setModalState({ modalOpen: true });
  };

  const addSenderID = (parameters) => {
    console.log("from addsender", parameters);
    if (parameters.id != null) {
      axios
        .put("http://localhost/semaapi/public/api/update_sender_id", {
          id: parameters.id,
          status: parameters.isActive,
          country: parameters.country,
          registered_networks: [...parameters.registered_networks],
          name: parameters.sender_name,
        })
        .then((res) => {
          if (res.status === 200) {
            notyf.success(res.data);
            setModalState({ modalOpen: false });
            console.log(res);
          }
        })
        .catch((err) => {
          notyf.error("Something went wrong");
          console.log(err);
        });
    } else {
      console.log("creating");
      axios
        .get("http://localhost/semaapi/public/sanctum/csrf-cookie")
        .then((response) => {
          console.log(response);
          axios
            .post("http://localhost/semaapi/public/api/register_sender_id", {
              country: parameters.country,
              sender_name: parameters.sender_name,
              status: parameters.isActive,
              registered_networks: parameters.registered_networks,
              user: user.email,
            })
            .then((res) => {
              console.log("add", res);
              if (res.status === 200) {
                notyf.success("Successfully Added Sender ID");
              }
            })
            .catch((err) => {
              notyf.error("Something went wrong");
            });
        })
        .catch((err) => {
          console.log("from add", err);
        });
    }
  };
  //For the modal form
  let form = modalState.modalOpen ? (
    <ModalForm
      initialValues={initialFormState.initialValues}
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
    console.log("open");
    setModalState({
      alertOpen: true,
      alertContent: sid_name,
      senderIdToDelete: dd,
    });
  };

  const deleteSenderID = () => {
    const id = modalState.senderIdToDelete;
    console.log(id);

    axios
      .get("http://localhost/semaapi/public/sanctum/csrf-cookie")
      .then((response) => {
        console.log(response);
        axios
          .post("http://localhost/semaapi/public/api/delete_sender_id", { id })
          .then((res) => {
            if (res.status === 200) {
              notyf.success("Deleted");
              setModalState({ modalOpen: false });
              //update data
              const sid = sidData.data_values.filter(
                (sid) => sid.id !== parseInt(id)
              );
              setSidData({ data_values: sid });
              // console.log("sid", sid);
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log("from add", err);
      });

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
    () => sidData.data_values,

    [sidData.data_values]
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
        Cell: ({ row }) => {
          const row_data = row.values;
          return (
            <div className="d-flex flex-row justify-content-around w-75">
              <div className="p-1 m-3">
                <span
                  {...row.getToggleRowExpandedProps()}
                  onClick={() => row.toggleRowExpanded()}
                >
                  {row.isExpanded ? (
                    <EyeOff color="#1E8E78" className="m-3" size={22} />
                  ) : (
                    <Eye color="#1E8E78" className="m-3" size={24} />
                  )}
                </span>
              </div>
              <div className="p-1 m-3">
                <Edit2
                  onClick={() => onEditButtonClicked(row_data)}
                  className="m-3"
                  color="#0392CE"
                  size={24}
                />
              </div>
              <div className="p-1 m-3">
                <Trash
                  onClick={() => openAlertModal(row_data.name, row_data.id)}
                  className="m-3"
                  color="#FFA4A1"
                  size={24}
                />
              </div>
            </div>
          );
        },
        // Cell: ({ value, row }) =>
        //   value == null
        //     ? "No actions"
        //     : value.map((action) => {
        //         const data = row.original;

        //         if (action === "edit") {
        //           return (
        //             <span
        //               className="p-1 m-3"
        //               onClick={() => onEditButtonClicked(data)}
        //             >
        //               <Edit2 size={24} />
        //             </span>
        //           );
        //         } else if (action === "delete") {
        //           return (
        //             <Trash
        //               onClick={() => openAlertModal(data.name, data.id)}
        //               className="m-3"
        //               size={24}
        //             />
        //           );
        //         } else if (action === "view") {
        //           return (
        //             <span
        //               {...row.getToggleRowExpandedProps()}
        //               onClick={() => row.toggleRowExpanded()}
        //             >
        //               {row.isExpanded ? (
        //                 <EyeOff className="m-3" size={22} />
        //               ) : (
        //                 <Eye className="m-3" size={24} />
        //               )}
        //             </span>
        //           );
        //         } else {
        //           return "";
        //         }
        //       }),
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
    (data) => <MatrixTable data={data.row.original.registered_networks} />, //was .mno
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
            <Col lg={4}>
              <Formik
                initialValues={{ country: "Tanzania" }}
                onSubmit={async (values) => {
                  //function to api to fetch tanzanian sender ids
                  console.log("From submit", values);
                }}
              >
                {({ handleChange, handleSubmit }) => (
                  <Form>
                    <Form.Group>
                      <Form.Label>Country</Form.Label>
                      <Form.Select
                        onChange={(e) => {
                          handleChange(e);
                          handleSubmit();
                        }}
                        name="country"
                      >
                        <option>Tanzania</option>
                        <option>Kenya</option>
                      </Form.Select>
                    </Form.Group>
                  </Form>
                )}
              </Formik>
            </Col>
            <Col lg={5}>
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </Col>
            <Col lg={3}>
              <div className="m-1">&nbsp;</div>
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
                      <tr className="p-1">
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
