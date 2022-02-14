import React from "react";
import { Row, Table } from "react-bootstrap";

// import { Edit2, Trash } from "react-feather";
// import inbox from "./inbox";

const jobsTable = () => (
  <Row>
    <h1>Job Table</h1>
    <h6 className="text-muted">List of Jobs</h6>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">SMS Type</th>
          <th scope="col">Job Name</th>
          <th scope="col">Encoding</th>
          <th scope="col">Total</th>
          <th scope="col">Remaining</th>
          <th scope="col">Sent</th>
          <th scope="col">Sender ID</th>
          <th scope="col">Status</th>
          <th scope="col">Scheduled</th>
          <th scope="col">Begin</th>
          <th scope="col">Completion</th>
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
          <td>Inactive</td>
          <td>Tanzania</td>
          <td>Sema</td>
          <td>some text</td>
          <td>March, 23rd 2020</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Active</td>
          <td>Tanzania</td>
          <td>AIMFIRMS</td>
          <td>some text</td>
          <td>March, 23rd 2020</td>
          <td>YES</td>
          <td>Inactive</td>
          <td>Tanzania</td>
          <td>Sema</td>
          <td>some text</td>
          <td>March, 23rd 2020</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Active</td>
          <td>Tanzania</td>
          <td>INFO</td>
          <td>some other text</td>
          <td>March, 23rd 2020</td>
          <td>YES</td>
          <td>Inactive</td>
          <td>Tanzania</td>
          <td>Sema</td>
          <td>some text</td>
          <td>March, 23rd 2020</td>
        </tr>
      </tbody>
    </Table>
  </Row>
);

export default jobsTable;
