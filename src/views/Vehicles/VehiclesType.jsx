import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../assets/scss/custom/VehiclesType.scss";
import car_1 from "../../assets/img/car/car-3.png";
import car_2 from "../../assets/img/car/car-4.png";
import car_3 from "../../assets/img/car/car-1.jpeg";
import car_4 from "../../assets/img/car/car-2.jpeg";
const VehiclesType = () => {
  const history = useHistory();

  const handleAddVehicles = () => {
    history.push("add-vehicles-type");
  };

  const handleSelect = (e) => {
    if (e.target.value === "edit") {
      history.push("edit-vehicles-type");
    }
    if (e.target.value === "delete") {
      alert("Item delete");
    }
  };
  return (
    <>
      <Container fluid>
        <div className="header-top">
          <h3>Vehicles Type</h3>
          <div>
            <Button variant="success" onClick={handleAddVehicles}>
              Add New
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
                  <th scope="col">Icon Image</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col"> Display Name</th>
                  <th scope="col">No. of Seats</th>
                  <th scope="col">Is Enable</th>
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
                    <img className="vehicle_img" src={car_2} alt="car" />
                  </td>
                  <td> Hatchback</td>
                  <td>Hatchback</td>
                  <td>4</td>
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
                <tr scope="row">
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>2</td>
                  <td>
                    {" "}
                    <img className="vehicle_img" src={car_1} alt="car" />
                  </td>
                  <td> Sedan</td>
                  <td>Sedan</td>
                  <td>4</td>
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
                <tr scope="row">
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>3</td>
                  <td>
                    {" "}
                    <img className="vehicle_img" src={car_2} alt="car" />
                  </td>
                  <td> Mini van</td>
                  <td>Mini van </td>
                  <td>4</td>
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
                <tr scope="row">
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>4</td>
                  <td>
                    {" "}
                    <img className="vehicle_img" src={car_4} alt="car" />
                  </td>
                  <td> Saloon</td>
                  <td>Saloon </td>
                  <td>4</td>
                  <td>Yes</td>
                  <td>
                    <div class="box">
                      {/* <i class="fas fa-cog"></i> */}
                      {/* <SettingsIcon color="primary" /> */}
                      <select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr scope="row">
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>5</td>
                  <td>
                    {" "}
                    <img className="vehicle_img" src={car_1} alt="car" />
                  </td>
                  <td> Suv</td>
                  <td> Suv </td>
                  <td>4</td>
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
                <tr scope="row">
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>6</td>
                  <td>
                    {" "}
                    <img className="vehicle_img" src={car_2} alt="car" />
                  </td>
                  <td> Truck</td>
                  <td> Truck </td>
                  <td>6</td>
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
                <tr scope="row">
                  <td>
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </td>
                  <td>7</td>
                  <td>
                    {" "}
                    <img className="vehicle_img" src={car_4} alt="car" />
                  </td>
                  <td> Bus</td>
                  <td> Bus </td>
                  <td>40</td>
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
            <p>Showing 1 to 7 of 7 entries</p>
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

export default VehiclesType;
