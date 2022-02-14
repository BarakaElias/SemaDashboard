import React from "react";
import { Row, Table } from "react-bootstrap";

// import { Edit2, Trash } from "react-feather";
// import inbox from "./inbox";

const channelTable = () => (
  <Row>
    <h1>Available Channels</h1>
    <h6 className="text-muted">List of channels</h6>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col">Channel</th>
          <th scope="col">Keyword</th>
          <th scope="col">Price</th>
          <th scope="col">Active</th>
          <th scope="col">Auto Reply</th>
          <th scope="col">Sender ID</th>
          <th scope="col">Text</th>
          <th scope="col">Auto Post</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Type 1</td>
          <td>Channel 1</td>
          <td>Sema</td>
          <td>some text</td>
          <td>TZS 20</td>
          <td>YES</td>
          <td>Sema</td>
          <td>some text</td>
          <td>YES</td>
          <td>https://bit.ly/xuZcmv</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Type 2</td>
          <td>Channel 1</td>
          <td>Sema</td>
          <td>some text</td>
          <td>TZS 30</td>
          <td>NO</td>
          <td>JIJALI</td>
          <td>some text</td>
          <td>NO</td>
          <td>https://bit.ly/xuZcmv</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Type 3</td>
          <td>Channel 2</td>
          <td>AIM</td>
          <td>some other text</td>
          <td>TZS 20</td>
          <td>YES</td>
          <td>AIM</td>
          <td>some text</td>
          <td>YES</td>
          <td>https://bit.ly/xuZcmv</td>
        </tr>
      </tbody>
    </Table>
  </Row>
);

export default channelTable;
