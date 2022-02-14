import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import { Card, Dropdown, Row, Form, Button, Col } from "react-bootstrap";
// import InputMask from "react-input-mask";

import { MoreHorizontal } from "react-feather";

import usePalette from "../../../hooks/usePalette";

const BarChart = () => {
  const [formState, setFormState] = useState({
    contactListForm: {
      start_date: {
        required: false,
        value: "",
        hasError: false,
      },
      end_date: {
        required: false,
        value: "",
        hasError: false,
      },
    },
  });
  const checkValidity = (value, isRequired) => {
    let isValid = true;
    if (isRequired) {
      isValid = value.trim() === "";
      return isValid;
    }
    return !isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    // console.log(event.target.value);
    const updatedQuickSMSForm = { ...formState.contactListForm };
    const updatedFormElement = { ...updatedQuickSMSForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.hasError = checkValidity(
      updatedFormElement.value,
      updatedFormElement.required
    );
    updatedQuickSMSForm[inputIdentifier] = updatedFormElement;
    setFormState({ contactListForm: updatedQuickSMSForm });
    console.log(updatedQuickSMSForm);
  };
  const palette = usePalette();

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Last year",
        backgroundColor: palette.primary,
        borderColor: palette.primary,
        hoverBackgroundColor: palette.primary,
        hoverBorderColor: palette.primary,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.325,
        categoryPercentage: 0.5,
      },
      {
        label: "This year",
        backgroundColor: palette["primary-light"],
        borderColor: palette["primary-light"],
        hoverBackgroundColor: palette["primary-light"],
        hoverBorderColor: palette["primary-light"],
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.325,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cornerRadius: 15,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            stepSize: 20,
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "transparent",
          },
          stacked: true,
        },
      ],
    },
  };

  return (
    <Card className="flex-fill w-100">
      <Card.Header>
        <div className="card-actions float-end">
          <Dropdown align="end">
            <Dropdown.Toggle as="a" bsPrefix="-">
              <MoreHorizontal />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another Action</Dropdown.Item>
              <Dropdown.Item>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Card.Title tag="h5" className="mb-0">
          SMS SENT
        </Card.Title>
      </Card.Header>
      <Card.Body className="d-flex flex-column">
        <Form>
          <Row>
            <Col lg="5">
              <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  onChange={(event) => inputChangedHandler(event, "start_date")}
                  type="date"
                />
                <span className="text-muted">e.g "MM/DD/YYYY"</span>
              </Form.Group>
            </Col>
            <Col lg="5">
              <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  onChange={(event) => inputChangedHandler(event, "end_date")}
                  type="date"
                />
                <span className="text-muted">e.g "MM/DD/YYYY"</span>
              </Form.Group>
            </Col>
            <Col className="d-flex">
              <Button variant="info" siz="lg">
                Filter
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="align-self-center w-100">
          <div className="chart chart-lg">
            <Bar data={data} options={options} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
