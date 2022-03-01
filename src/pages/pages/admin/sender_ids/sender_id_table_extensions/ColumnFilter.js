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

export const MnoColumnFilter = () => {
  return (
    <div className="d-inline-flex mb-1 w-100 justify-content-around">
      <div>
        <div
          style={{ width: "15px", height: "15px" }}
          className="bg-success rounded-circle"
        ></div>
        <p className="text-weight-light">Registered</p>
      </div>
      <div>
        <div
          style={{ width: "15px", height: "15px" }}
          className="bg-warning rounded-circle"
        ></div>
        Pending
      </div>
      <div>
        <div
          style={{ width: "15px", height: "15px" }}
          className="bg-danger rounded-circle"
        ></div>
        Not Allowed
      </div>
    </div>
  );
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
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </Form.Select>
    </Form.Group>
  );
};

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

export const EmptyColumnFilter = () => {
  return <div className="mb-4">&nbsp;</div>;
};
