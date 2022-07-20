import {
  faArrowDown,
  faArrowRight,
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Table, Col, Form } from "react-bootstrap";
import { useTable, useExpanded } from "react-table";
import { ColumnFilter } from "../../../../sender_ids/sender_id_table_extensions/ColumnFilter";
import CustomerStatsSubTable from "./subtables/customer_stats_subtable";
import RouteStatsSubTable from "./subtables/route_stats_subtable";

const CustomerStatsTable = () => {
  const data = React.useMemo(
    () => [
      {
        customer: "Assemble Insurance",
      },
      {
        customer: "Cequens",
      },
      {
        customer: "Kwanza Home Cooperatives",
      },
    ],
    []
  );

  const sub_data = [
    {
      vendor: "Zantel",
      v_account: "Zantel",
      destination: "Tanzania: Airtel(formely Zain/Celtell",
      sent: "79",
      dlr: "80",
      amount: "450",
      currency: "TZS",
    },
    {
      vendor: "Zantel",
      v_account: "Zantel",
      destination: "Tanzania: Airtel(formely Zain/Celtell",
      sent: "79",
      dlr: "80",
      amount: "450",
      currency: "TZS",
    },
    {
      vendor: "Zantel",
      v_account: "Zantel",
      destination: "Tanzania: Airtel(formely Zain/Celtell",
      sent: "79",
      dlr: "80",
      amount: "450",
      currency: "TZS",
    },
    {
      vendor: "Zantel",
      v_account: "Zantel",
      destination: "Tanzania: Airtel(formely Zain/Celtell",
      sent: "79",
      dlr: "80",
      amount: "450",
      currency: "TZS",
    },
    {
      vendor: "Zantel",
      v_account: "Zantel",
      destination: "Tanzania: Airtel(formely Zain/Celtell",
      sent: "79",
      dlr: "80",
      amount: "450",
      currency: "TZS",
    },
  ];
  const columns = React.useMemo(
    () => [
      {
        Header: "Customer",
        accessor: "customer",
        Cell: ({ value, row }) => {
          return (
            <React.Fragment>
              <span onClick={() => row.toggleRowExpanded()}>
                {row.isExpanded ? (
                  <FontAwesomeIcon icon={faChevronCircleDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                )}
              </span>
              {"   " + value}
            </React.Fragment>
          );
        },
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    visibleColumns,
    prepareRow,
    state,
  } = useTable({ columns, data }, useExpanded);

  const renderRowSubComponent = React.useCallback(
    (data) => <CustomerStatsSubTable data={sub_data} />,
    []
  );

  let i = 0;

  return (
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
                    <div className="mb-1" {...column.getHeaderProps()}>
                      {
                        //Render the header
                        column.render("Header")
                      }
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
          rows.map((row) => {
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
                    <td className="text-center" colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })
        }
      </tbody>
    </Table>
  );
};

export default CustomerStatsTable;
