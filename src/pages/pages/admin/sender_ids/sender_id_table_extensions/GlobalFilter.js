import React from "react";
import { Form } from "react-bootstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <Form.Group className="mb-3">
        <Form.Label>Search All</Form.Label>
        <Form.Control
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Form.Group>
    </span>
  );
};
