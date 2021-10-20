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
const CreateGroup = () => {
  return (
    <Container fluid>
      <div>
        <div className="header-top">
          <h3> Create Group</h3>
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4 mt-4">
                <Form.Label>Group Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 col-xs-4">
                <Form.Label>Note</Form.Label>
                <textarea
                  class="form-control"
                  id="comments"
                  name="message"
                  rows="6"
                  autocomplete="off"
                  spellcheck="true"
                ></textarea>
              </Form.Group>
            </Col>
            <Col></Col>
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
            Create Group
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CreateGroup;
