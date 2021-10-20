import React from "react";
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
import "../../assets/scss/custom/AddVehicles.scss";
function AddVehiclesType() {
  return (
    <Container fluid>
      <div className="header-top">
        <h3> Add Vehicles type</h3>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mt-4">
              <Form.Label>Vehicle Type</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mt-4">
              <Form.Label>Display Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mt-4">
              <Form.Label>Icon Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mt-4">
              <Form.Label>No. of Sit</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <div className="mt-4">
              <BootstrapSwitchButton
                className="active-switch-btn edit-save"
                checked={true}
                width={90}
                height={30}
              />
              <span className="ml-4">Is Enable</span>
            </div>
          </Col>
        </Row>
        <br />

        <Button
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default AddVehiclesType;
