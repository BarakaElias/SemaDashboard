import React from "react";
import { Card, Table } from "react-bootstrap";
// import { Edit2, Trash } from "react-feather";

const lastTransactions = () => (
  <Card className="flex-fill w-100">
    <Card.Header>
      <Card.Title tag="h5">Last 5 Transactions</Card.Title>
      {/* <h6 className="card-subtitle text-muted">
        Use <code>striped</code> to add zebra-striping to any table row within
        the <code>&#x3C;tbody&#x3E;</code>.
      </h6> */}
    </Card.Header>
    <Table striped>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Transaction</th>
          <th style={{ width: "25%" }}>Amount</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date
          </th>
          {/* <th>Actions</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CREDIT WAS ADDED</td>
          <td>TZS 10000</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          {/* <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td> */}
        </tr>
        <tr>
          <td>CREDIT WAS ADDED</td>
          <td>TZS 25000</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          {/* <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td> */}
        </tr>
        <tr>
          <td>CREDIT WAS ADDED</td>
          <td>TZS 100000</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          {/* <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td> */}
        </tr>
        <tr>
          <td>CREDIT WAS ADDED</td>
          <td>TZS 59000</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          {/* <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td> */}
        </tr>
        <tr>
          <td>CREDIT WAS ADDED</td>
          <td>TZS 35000</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          {/* <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td> */}
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default lastTransactions;
