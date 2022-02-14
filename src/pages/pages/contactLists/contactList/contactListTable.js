import React, { useEffect } from "react";
import { Row, Table } from "react-bootstrap";
import axios from "axios";

import { Edit2, Trash } from "react-feather";
import { Link } from "react-router-dom";
// import inbox from "./inbox";

const ContactListTable = () => {
  const deleteContact = (event, contactId) => {
    const params = {
      api_id: "API3462965997",
      api_password: "Licks@2021!",
      contact_id: contactId,
    };
    axios
      .get("https://api.sema.co.tz/api/DeleteContact", { params: params })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Row>
      <h1>Contact Lists</h1>
      <h6 className="text-muted">List of contacts</h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "40%" }}>Contact name</th>
            <th>Phone number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>55133</td>
            <td>Baraka</td>
            <td>255624327900</td>
            <td className="table-action">
              <Trash
                onClick={(event) => deleteContact(event, "55133")}
                className="align-middle"
                size={18}
              />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tedd Bundy</td>
            <td>255624327900</td>
            <td className="table-action">
              <Trash className="align-middle" size={18} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cookie Vincent</td>
            <td>255624327900</td>
            <td className="table-action">
              <Trash className="align-middle" size={18} />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Tedd Bundy</td>
            <td>255624327900</td>
            <td className="table-action">
              <Trash className="align-middle" size={18} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
};

export default ContactListTable;
