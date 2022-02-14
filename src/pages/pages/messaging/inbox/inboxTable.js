import React from "react";
import { Row, Table } from "react-bootstrap";

// import { Edit2, Trash } from "react-feather";
// import inbox from "./inbox";

const inboxTable = () => (
  <Row>
    <h1>Incoming SMS</h1>
    <h6 className="text-muted">
      All messages received <code>today</code>
    </h6>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Channel</th>
          <th scope="col">Phone number</th>
          <th scope="col">Keyword</th>
          <th scope="col">Text</th>
          <th scope="col">Price</th>
          <th scope="col">Recieved Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Channel 1</td>
          <td>255624327900</td>
          <td>Sema</td>
          <td>some text</td>
          <td>TZS 20</td>
          <td>November, 3rd 2021</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Channel 2</td>
          <td>2551884011933</td>
          <td>Sema</td>
          <td>some text</td>
          <td>TZS 30</td>
          <td>November, 2nd 2021</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Channel 2</td>
          <td>255692463373</td>
          <td>AIM</td>
          <td>some other text</td>
          <td>TZS 20</td>
          <td>October, 31st 2021</td>
        </tr>
      </tbody>
    </Table>
  </Row>
);

export default inboxTable;
