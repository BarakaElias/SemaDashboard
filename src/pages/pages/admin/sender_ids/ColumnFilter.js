import React from "react";
import { Form } from "react-bootstrap";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <Form.Group className="mb-3">
        <Form.Control
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Form.Group>
    </span>
  );
};
