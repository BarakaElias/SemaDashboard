import React from "react";
import { Row, Table } from "react-bootstrap";

// import { Edit2, Trash } from "react-feather";
// import inbox from "./inbox";

const dlrReportTable = () => (
  <Row>
    <h1>DLR Report</h1>
    <h6 className="text-muted">List of All SMS DLR Report</h6>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">SMS ID</th>
          <th scope="col">Sender ID</th>
          <th scope="col">DLR Status</th>
          <th scope="col">Message</th>
          <th scope="col">Phone Number</th>
          <th scope="col">MCC</th>
          <th scope="col">MNC</th>
          <th scope="col">Type</th>
          <th scope="col">Length</th>
          <th scope="col">Characters Added</th>
          <th scope="col">Rate</th>
          <th scope="col">Cost</th>
          <th scope="col">Submit Date</th>
          <th scope="col">Sent Date</th>
          <th scope="col">DLR Date</th>
          <th scope="col">Parts</th>
          <th scope="col">Country</th>
          <th scope="col">Operator</th>
          <th scope="col">Job ID</th>
          <th scope="col">Source</th>
          <th scope="col">Error Code</th>
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

export default dlrReportTable;
