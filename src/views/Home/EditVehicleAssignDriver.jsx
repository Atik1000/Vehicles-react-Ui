import React from "react";
import { Form, Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const EditVehicleAssignDriver = () => {
  return (
    <Container fluid>
      <div className="header-top bg-warning">
        <h3>Edit Vehicles</h3>
      </div>
      <div className="edit-header-title mb-4">
        <span className="mt-4 ">
          <Link to="edit-vehicles">General Information</Link>
        </span>
        <span className="mt-4 ml-4 ">
          <Link to="edit-vehicles-insurance">Insurance</Link>
        </span>
        <span className="mt-4 ml-4 ">
          <Link to="edit-vehicles-purchase">Purchase Info</Link>
        </span>
        <span
          className="mt-4 ml-4 bg-warning"
          style={{ padding: 10, color: "black", borderRadius: 5 }}
        >
          <Link to="edit-vehicles-assign-driver">Assign Driver</Link>
         
        </span>
      </div>
      <Form>
        <Form.Group className="mb-3 col-xs-4 mt-4">
          <div className="form-group">
            <Form.Label>Select Driver</Form.Label>
            <select className="form-control mb-3 col-xs-4">
              <option>John Doe</option>
              <option>Mark smith</option>
            </select>
          </div>
        </Form.Group>

        <Button
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
};

export default EditVehicleAssignDriver;
