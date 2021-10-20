import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../assets/scss/custom/ManageVehicleGroup.scss";
const ManageVehicleGroup = () => {
  const history = useHistory();

  const handleAddVehicles = () => {
    history.push("add-group");
  };
  const handleSelect = (e) => {
    if (e.target.value === "edit") {
      history.push("edit-group");
    }
    if (e.target.value === "delete") {
      alert("Item delete");
    }
  };
  return (
    <>
      <Container fluid>
        <div className="header-top">
          <h3> Vehicles Group</h3>
          <div>
            <Button variant="success" onClick={handleAddVehicles}>
              Create Group
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
                  <th scope="col">Group Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Vehicles</th>
                  <th scope="col">Users</th>
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

                  <td>Deafult</td>
                  <td> Deafult vehicle group</td>
                  <td> 2</td>
                  <td>2</td>
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
            <p>Showing 1 to 1 of 1 entries</p>
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
};

export default ManageVehicleGroup;
