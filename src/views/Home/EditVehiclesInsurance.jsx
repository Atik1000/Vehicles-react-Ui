import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link, useHistory } from "react-router-dom";
import "../../assets/scss/custom/AddVehicles.scss";

function EditVehiclesInsurance() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const handleEditVehicles = () => {
    history.push("edit-vehicles-purchase");
  };
  return (
    <Container fluid>
      <div className="header-top bg-warning">
        <h3>Edit Vehicles</h3>
      </div>
      <div className="edit-header-title mb-4">
        <span className="mt-4 ">
          <Link to="edit-vehicles"> General Information</Link>
        </span>
        <span
          className="mt-4 ml-4 header-info bg-warning"
          style={{ padding: 10, color: "black" }}
        >
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
          <div className="col-md-8">
            <Form.Group className="mb-3 mt-4 col-xs-4">
              <Form.Label>Insurance Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
        </Row>

        <Row>
          <div className="col-md-8">
            <Form.Group className="mb-3 mt-4 col-xs-4">
              <Form.Label>Insurance Document</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </div>
        </Row>
        <Row>
          <div className="col-md-8">
            <Form.Group className="mb-3 mt-4 col-xs-4">
              <Form.Label>Insurance Expiry Date</Form.Label>
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Group>
          </div>
        </Row>

        <Button
          onClick={handleEditVehicles}
          variant="contained"
          style={{
            backgroundColor: "orange",
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EditVehiclesInsurance;
