import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../../assets/scss/custom/AddVehicles.scss";

const EditVehiclesInspection = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container fluid>
      <div className="header-top bg-warning">
        <h3>Edit Vehicle Inspection</h3>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4 mt-4">
              <Form.Label>Select Vehicles</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4 mt-4">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Meter Reading Outgoing (km)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label>Meter Reading Incoming (km)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>

        <div class="row">
          <div class="col mb-3">
            <label> Fuel level Outgoing (km) </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                1/4
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                1/2
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio3">
                3/4
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio4">
                Full Tank
              </label>
            </div>
          </div>

          <div class="col">
            <label> Fuel level incoming (km) </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                1/4
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                1/2
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio3">
                3/4
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio4">
                Full Tank
              </label>
            </div>
          </div>
        </div>
        <Row>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label> Date & Time Outgoing</Form.Label>
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 col-xs-4">
              <Form.Label> Date & Time Incoming</Form.Label>
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
            <label> Petrol Card </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes"
                value="option1"
              />
              <label class="form-check-label" for="yes">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no"
                value="option1"
              />
              <label class="form-check-label" for="no">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Light,Indicator</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes1"
                value="option1"
              />
              <label class="form-check-label" for="yes1">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no1"
                value="option1"
              />
              <label class="form-check-label" for="no1">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label> Inverter/Cigarette </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes2"
                value="option1"
              />
              <label class="form-check-label" for="yes2">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no2"
                value="option1"
              />
              <label class="form-check-label" for="no2">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Car mats/car seat covers</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes3"
                value="option"
              />
              <label class="form-check-label" for="yes3">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no3"
                value="option1"
              />
              <label class="form-check-label" for="no3">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label> Interior damages </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes4"
                value="option1"
              />
              <label class="form-check-label" for="yes4">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no4"
                value="option1"
              />
              <label class="form-check-label" for="no4">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Light,Indicator</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes5"
                value="option1"
              />
              <label class="form-check-label" for="yes5">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no5"
                value="option1"
              />
              <label class="form-check-label" for="no5">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              {" "}
              Damage to exterior of car:dents,scratches,broken light etc
            </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes6"
                value="option1"
              />
              <label class="form-check-label" for="yes6">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no6"
                value="option1"
              />
              <label class="form-check-label" for="no6">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Types:New /need replacing</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes7"
                value="option1"
              />
              <label class="form-check-label" for="yes7">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no7"
                value="option1"
              />
              <label class="form-check-label" for="no7">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label> Ladders,extension ladder </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes8"
                value="option1"
              />
              <label class="form-check-label" for="yes8">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no8"
                value="option1"
              />
              <label class="form-check-label" for="no8">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Extension Leeds</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes9"
                value="option1"
              />
              <label class="form-check-label" for="yes9">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no9"
                value="option1"
              />
              <label class="form-check-label" for="no9">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label> Any of of our power tolls </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes10"
                value="option1"
              />
              <label class="form-check-label" for="yes10">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no10"
                value="option1"
              />
              <label class="form-check-label" for="no10">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Air condition:working or not</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes11"
                value="option1"
              />
              <label class="form-check-label" for="yes11">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no11"
                value="option1"
              />
              <label class="form-check-label" for="no11">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label> Light,headlight working </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes12"
                value="option1"
              />
              <label class="form-check-label" for="yes12">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no12"
                value="option1"
              />
              <label class="form-check-label" for="no12">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Automatic lock/alarms working</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes13"
                value="option1"
              />
              <label class="form-check-label" for="yes13">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no13"
                value="option1"
              />
              <label class="form-check-label" for="no13">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label> Window:working or not .any damages/window tints </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes14"
                value="option1"
              />
              <label class="form-check-label" for="yes14">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no14"
                value="option1"
              />
              <label class="form-check-label" for="no14">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Condition or car seats</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes15"
                value="option1"
              />
              <label class="form-check-label" for="yes15">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no15"
                value="option1"
              />
              <label class="form-check-label" for="no15">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label> Oit check </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes16"
                value="option1"
              />
              <label class="form-check-label" for="yes16">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no16"
                value="option1"
              />
              <label class="form-check-label" for="no16">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
          <Col>
            <label> Suspension</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes17"
                value="option1"
              />
              <label class="form-check-label" for="yes17">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no17"
                value="option1"
              />
              <label class="form-check-label" for="no17">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              {" "}
              Tool boxes,gas struts on tool boxes,roller draws inside tool boxes
              trundle tray{" "}
            </label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yes18"
                value="option1"
              />
              <label class="form-check-label" for="yes18">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="no18"
                value="option1"
              />
              <label class="form-check-label" for="no18">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-control" type="text" />
            </div>
          </Col>
        </Row>
        <Button
          style={{
            backgroundColor: "orange",
            border: "none", 
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EditVehiclesInspection;
