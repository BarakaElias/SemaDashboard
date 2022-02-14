import React from "react";
import { Row, Table } from "react-bootstrap";

// import { Edit2, Trash } from "react-feather";
// import inbox from "./inbox";

const transactionsTable = () => (
  <Row>
    <h1>Credit Transactions</h1>
    <h6 className="text-muted">List of All SMS Credit Transactions</h6>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Balance Added</th>
          <th scope="col">Currency</th>
          <th scope="col">Amount Charged</th>
          <th scope="col">Amount Credited</th>
          <th scope="col">Tax Amount</th>
          <th scope="col">Processing Fee</th>
          <th scope="col">Payment Date</th>
          <th scope="col">Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>10000</td>
          <td>TZS</td>
          <td>24/01/2021</td>
          <td>some text</td>
          <td></td>
          <td>NO</td>
          <td>27/09/2021</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>100000</td>
          <td>TZS</td>
          <td>12/09/2021</td>
          <td>some text</td>
          <td></td>
          <td>YES</td>
          <td>27/09/2021</td>
          <td>For testing</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>50000</td>
          <td>TZS</td>
          <td></td>
          <td>some other text</td>
          <td>March, 23rd 2020</td>
          <td>YES</td>
          <td>27/09/2021</td>
          <td>For Testing</td>
        </tr>
      </tbody>
    </Table>
  </Row>
);

export default transactionsTable;
