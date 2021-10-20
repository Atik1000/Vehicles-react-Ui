import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../assets/scss/custom/Dashbord.scss";
import avater from "../../assets/img/default-avatar.png";

function Driver() {
  const history = useHistory();

  const handleAddVehicles = () => {
    history.push("add-driver");
  };
    const handleSelect = (e) => {
      if (e.target.value === "edit") {
        history.push("edit-driver");
      }
      if (e.target.value === "delete") {
        alert("Item delete");
      }
    };
  return (
    <>
      <Container fluid>
        <div className="header-top">
          <h3> Add Driver</h3>
          <div>
            <Button variant="success" onClick={handleAddVehicles}>
              Add Driver
            </Button>
            <Button variant="warning" className="ml-3">
              Import Excel
            </Button>
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
                  <th scope="col">#</th>
                  <th scope="col">Driver Image</th>
                  <th scope="col"> Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Is Active</th>
                  <th scope="col"> Phone Number</th>
                  <th scope="col">Assign Vehicle</th>
                  <th scope="col">Start Date</th>
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
                  <td>1</td>
                  <td>
                    <img className="vehicle_img" src={avater} alt="car" />
                  </td>

                  <td> John Doe</td>
                  <td> john@abc.com</td>
                  <td>Yes</td>
                  <td>1234566</td>
                  <td>Honda juzz</td>
                  <td>2019-09-27</td>

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
                  <td>2</td>
                  <td>
                    <img className="vehicle_img" src={avater} alt="car" />
                  </td>

                  <td> Mark Smith</td>
                  <td> mark@abc.com</td>
                  <td>No</td>
                  <td>1234566</td>
                  <td>Honda juzz</td>
                  <td>2020-09-27</td>

                  <td>
                    <div class="box">
                      {/* <i class="fas fa-cog"></i> */}
                      {/* <SettingsIcon color="primary" /> */}
                      <select>
                        <option>Edit</option>
                        <option>Delete</option>
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

export default Driver;
