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
import DatePicker from "react-datepicker";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import "../../assets/scss/custom/AddVehicles.scss";

function EditVehiclesPurchase() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const handleEditVehicles = () => {
    history.push("edit-vehicles-assign-driver");
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
        <span className="mt-4 ml-4 ">
          <Link to="edit-vehicles-insurance">Insurance</Link>
        </span>
        <span className="mt-4 ml-4 header-info bg-warning">
          <Link
            to="edit-vehicles-purchase"
            style={{ padding: 10, color: "black" }}
          >
            Purchase Info
          </Link>
        </span>
        <span className="mt-4 ml-4">
          <Link to="edit-vehicles-assign-driver">Assign Driver</Link>
        </span>
      </div>

      <div className="acquisition-header">
        <p className="acquisition-header-title">Acquisition Add</p>
        <Form>
          <div className="expense-price-form">
            <input
              type="text"
              placeholder="Expense Type"
              class="form-control"
              id="expenseType"
            />

            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="text"
                placeholder="Expense Price"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <div>
              <button type="button" class="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </Form>
      </div>

      <div className="acquisition-header">
        <p className="acquisition-header-title">
          Acquisition : Honda Jazz9191bh
        </p>
        <div className="acquisition-content border-top border-bottom">
          <div>
            <p>Expanse Type</p>
          </div>
          <div>
            <p>Expanse Amount</p>
          </div>
          <div>
            <p>Action</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Button
        onClick={handleEditVehicles}
        variant="contained"
        style={{
          backgroundColor: "orange",
        }}
      >
        Submit
      </Button>
    </Container>
  );
}

export default EditVehiclesPurchase;
