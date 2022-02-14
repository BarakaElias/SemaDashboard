import React from "react";
import { Row, Table } from "react-bootstrap";

// import { Edit2, Trash } from "react-feather";
// import inbox from "./inbox";

const templateTable = () => (
  <Row>
    <h1>Available Templates</h1>
    <h6 className="text-muted">List of templates</h6>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Name</th>
          <th style={{ width: "40%" }} scope="col">
            Text
          </th>
          <th scope="col">Created</th>
          <th scope="col">Approved</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Inactive</td>
          <td>AIMFIRMS CHRISTMAS GREETING</td>
          <td>
            The team at [company name] wishes you peace, joy and prosperity
            throughout the coming year. Thank you for your continued support and
            partnership. We look forward to working with you in the years to
            come.
          </td>
          <td>March, 21st 2020</td>
          <td>March, 23rd 2020</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Active</td>
          <td>Sema</td>
          <td>
            Hey #V1, Thank you for signing up for Sema Communications! We’re
            stoked to see what you’re able todo with our communication platform.
            To get started, we recommend checking out our Quick-Start Guide
            that’ll walk you through the basics of each Sema Services
            step-by-step. We also have a two - minute intro video if you’re more
            of a movie buff. And if you’re ready to start reaching out to your
            customers, you can log in below! https://login.sema.co.tz/ Cheers!
          </td>
          <td>March, 22nd 2020</td>
          <td>March, 23rd 2020</td>
        </tr>
        {/* <tr>
          <th scope="row">3</th>
          <td>Active</td>
          <td>Tanzania</td>
          <td>INFO</td>
          <td>some other text</td>
          <td>March, 23rd 2020</td>
        </tr> */}
      </tbody>
    </Table>
  </Row>
);

export default templateTable;
