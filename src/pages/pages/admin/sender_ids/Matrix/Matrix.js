import React from "react";
import { Row, Badge } from "react-bootstrap";
import MatrixTable from "./MatrixTable";

const Matrix = () => {
  return (
    <React.Fragment>
      <Row className="p-3 matrix">
        <MatrixTable />
      </Row>
    </React.Fragment>
  );
};
export default Matrix;
