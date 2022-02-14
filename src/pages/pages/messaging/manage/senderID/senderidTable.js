import React from "react";
import { Row, Table } from "react-bootstrap";

// import { Edit2, Trash } from "react-feather";
// import inbox from "./inbox";

const senderIdTable = () => (
  <Row>
    <h1>Sender IDs</h1>
    <h6 className="text-muted">List of Requested/Abailable Sender IDs</h6>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Country</th>
          <th scope="col">Sender ID</th>
          <th scope="col">Remarks</th>
          <th scope="col">Created</th>
          <th scope="col">Approved</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Inactive</td>
          <td>Tanzania</td>
          <td>Sema</td>
          <td>some text</td>
          <td>March, 23rd 2020</td>
          <td>NO</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Active</td>
          <td>Tanzania</td>
          <td>AIMFIRMS</td>
          <td>some text</td>
          <td>March, 23rd 2020</td>
          <td>YES</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Active</td>
          <td>Tanzania</td>
          <td>INFO</td>
          <td>some other text</td>
          <td>March, 23rd 2020</td>
          <td>YES</td>
        </tr>
      </tbody>
    </Table>
  </Row>
);

export default senderIdTable;
