import React from "react";
import { Form } from "react-bootstrap";

export const DateColumnFilter = ({ column: { filterValue, setFilter } }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        onChange={(event) => setFilter(event.target.value)}
        type="datetime-local"
        min="11/07/2021 19:30 21"
        placeholder=""
      />
    </Form.Group>
  );
};

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

export const EmptyColumnFilter = () => {
  return <div className="mb-4">&nbsp;</div>;
};

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        <option value="Activated">Activated</option>
        <option value="Requests Activation">Requests Activation</option>
        <option value="Trial">Trial</option>
      </Form.Select>
    </Form.Group>
  );
};
