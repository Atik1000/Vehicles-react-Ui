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
import { Link, useHistory } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../assets/scss/custom/AddVehicles.scss";

const EditVehicles = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const handleEditVehicles = () => {
    history.push("edit-vehicles-insurance");
  };
  return (
    <Container fluid>
      <div className="header-top bg-warning">
        <h3>Edit Vehicles</h3>
      </div>
      <div className="edit-header-title mb-4">
        <span
          style={{ padding: 10, color: "black" }}
          className="mt-4 header-info bg-warning"
        >
          <Link to="edit-vehicles"> General Information</Link>
        </span>
        <span className="mt-4 ml-4 ">
          <Link to="edit-vehicles-insurance">Insurance</Link>
        </span>
        <span className="mt-4 ml-4 ">
          <Link to="edit-vehicles-purchase">Purchase Info</Link>
        </span>
        <span className="mt-4 ml-4">
          <Link to="edit-vehicles-assign-driver">Assign Driver</Link>
        </span>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Vehicles Maker</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <div class="form-group">
              <label>Vehicles Engine Types</label>
              <select className="form-control mb-3 col-xs-4">
                <option>Petrol</option>
                <option>Disel</option>
                <option>Octen</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Vehicles Model</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Vehicles Horse Power</Form.Label>
              <Form.Control type="select" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <div className="form-group">
                <Form.Label>Vehicles Type</Form.Label>
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
              <Form.Label>Color</Form.Label>
              <Form.Control type="select" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Vehicles Year</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>VIN</Form.Label>
              <Form.Control type="select" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Average (Miles per Gallon )</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>License Plate</Form.Label>
              <Form.Control type="select" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Initial Milage</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>License Expiry Date</Form.Label>
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
              <Form.Label>Vehicles Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <div className="form-group">
                <Form.Label>Select Vehicles Group</Form.Label>
                <select className="form-control mb-3 col-xs-4">
                  <option>Default</option>
                  <option>Information</option>
                  <option>Success</option>
                </select>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <div className="col-md-6">
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Registration Expiry Date</Form.Label>
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-4 mt-3 col-xs-4">
              <Form.Label>Add User defined field</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-md-1" style={{ marginTop: 20 }}>
            <Button className="btn btn-success mt-4 add-btn">Add</Button>
          </div>
        </Row>
        <span>In Service?</span>
        <BootstrapSwitchButton
          className="active-switch-btn"
          checked={true}
          width={90}
        />
        <br />
        <br />
        <br />

        <Button
          variant="contained"
          style={{
            backgroundColor: "orange",
          }}
          onClick={handleEditVehicles}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EditVehicles;
