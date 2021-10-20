import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../assets/scss/custom/Dashbord.scss";
import car_1 from "../../assets/img/car/car-3.png";
import car_2 from "../../assets/img/car/car-4.png";
function Dashboard() {
  const history = useHistory();

  const handleAddVehicles = () => {
    history.push("add-vehicles");
  };

  const handleSelect = (e) => {
    if (e.target.value === "edit") {
      history.push("edit-vehicles");
    }
    if (e.target.value === "delete") {
      alert("Item delete");
    }
  };
  return (
    <>
      <Container fluid>
        <div className="header-top">
          <h3>Manage Vehicles</h3>
          <div>
            <Button variant="success" onClick={handleAddVehicles}>
              Add New
            </Button>
            <Button variant="warning">Import Excel</Button>
          </div>
        </div>

        <div className="dashbord_flex">
          <div>
            <select class="form-select" id="sel1" name="sellist1">
              <option>Show</option>
              <option>10</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="search">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="table">
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
                <tr>
                  <th scope="col">
                    <label class="control control--checkbox">
                      <input type="checkbox" class="js-check-all" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <th scope="col">Vehicle Image</th>
                  <th scope="col">Vehicle Name</th>
                  <th scope="col">Vehicle Model</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col"> Color</th>
                  <th scope="col">License Plate</th>
                  <th scope="col">Group</th>
                  <th scope="col">in service ?</th>
                  <th scope="col">Action</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr scope="row">
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>
                    <img className="vehicle_img" src={car_2} alt="car" />
                  </td>

                  <td> Honda</td>
                  <td> Jazz</td>
                  <td>Mini van</td>
                  <td>Red</td>
                  <td>9191bh</td>
                  <td>Default</td>
                  <td>Yes</td>
                  <td>
                    <div class="box">
                      <select onChange={(e) => handleSelect(e)}>
                        <option>Action</option>
                        <option value="edit">Edit</option>
                        <option value="delete">Delete</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>
                    <img className="vehicle_img" src={car_1} alt="car" />
                  </td>

                  <td> Honda</td>
                  <td> Jazz</td>
                  <td>Mini van</td>
                  <td>Red</td>
                  <td>9191bh</td>
                  <td>Default</td>
                  <td>Yes</td>
                  <td>
                    <div class="box">
                      <select onChange={(e) => handleSelect(e)}>
                        <option>Action</option>
                        <option value="edit">Edit</option>
                        <option value="delete">Delete</option>
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="dashbord-footer">
          <div>
            <p>Showing 1 to 2 of 2 entries</p>
          </div>
          <div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
