import React from "react";
import { Row, Table } from "react-bootstrap";

import { Edit2, Trash } from "react-feather";
import { Link } from "react-router-dom";
// import inbox from "./inbox";

const contactListsTable = () => (
  <Row>
    <h1>Contact Lists</h1>
    <h6 className="text-muted">List of contact lists</h6>
    <Table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jijali Customers</td>
          <td>500</td>
          <td className="table-action">
            <Link to="/contact-lists/edit-contact-list">
              <Edit2 className="align-middle me-1" size={18} />
            </Link>
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>My Frequent Customers</td>
          <td>150</td>
          <td className="table-action">
            <Link to="/contact-lists/edit-contact-list">
              <Edit2 className="align-middle me-1" size={18} />
            </Link>
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Subscribers</td>
          <td>300</td>
          <td className="table-action">
            <Link to="/contact-lists/edit-contact-list">
              <Edit2 className="align-middle me-1" size={18} />
            </Link>
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        {/* <tr>
          <td>Jijali Customers</td>
          <td>300</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr> */}
      </tbody>
    </Table>
  </Row>
);

export default contactListsTable;
