import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  Row,
  Col,
} from "react-bootstrap";

import BootstrapSwitchButton from "bootstrap-switch-button-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "../../assets/scss/custom/AddVehicles.scss";
const EditDriver = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Container fluid>
        <div className="header-top bg-warning">
          <h3>Edit Driver</h3>
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4 mt-4">
                <Form.Label> First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4 mt-4">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4 mt-4">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <div className="form-group">
                  <Form.Label>Assign Vehicles</Form.Label>
                  <select className="form-control mb-3 col-xs-4">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Address</Form.Label>
                <Form.Control type="select" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="select" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Employee Id</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label> Contract Number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>License Number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Issue Date</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Expiration Date</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Join Date</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Leave Date</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Gender</Form.Label>
                <div>
                  <input type="radio" id="male" value="male" name="gender" />
                  <label for="male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="f_male"
                    value="f_male"
                    name="gender"
                  />
                  <label for="f_male">Female</label>
                </div>
              </Form.Group>
            </Col>
            <Col>
              <label className="mt-2" htmlFor="">
                Emergency Contact Details
              </label>
              <textarea
                className="form-control"
                id="comments"
                name="message"
                rows="12"
                autocomplete="off"
                spellcheck="true"
              ></textarea>
            </Col>
          </Row>
          <Button
            variant="contained"
            style={{
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Update
          </Button>
          <Button
            className="ml-2"
            variant="contained"
            style={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Back
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditDriver;
