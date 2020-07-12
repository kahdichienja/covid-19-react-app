import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Notification from "./Notification";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  // MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
// import "../../index.css";
import Event from "./Event";

import {Weather} from './api/Weather'

class AgendaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: "",
      isOpen: false,
      modal: false,
      events: [
        {
          id: 1,
          time: "10:00",
          title: "Breakfast with Simon",
          location: "Lounge Caffe",
          description: "Discuss Q3 targets",
        },
      ],
    };
  }

  handleDelete = (eventId) => {
    const events = this.state.events.filter((e) => e.id !== eventId);
    this.setState({ events });
  };
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleInputChange = (inputName) => (value) => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue,
    });
    // console.log(this.state);
  };
  addEvent = () => {
    var newArray = [...this.state.events];
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      value: this.var > 5 ? "Its's grater then 5" : "Its lower or equal 5",
    });
    this.setState({ events: newArray });
    this.setState({
      time: "",
      title: "",
      location: "",
      description: "",
    });
  };
  componentDidMount() {
    window.addEventListener("online", () => {
      this.setState({ notification: "online" });
    });

    window.addEventListener("offline", () => {
      this.setState({ notification: "offline" });
    });
  }
  render() {
    const { events, modal, notification } = this.state;
    return (
      <React.Fragment>
        <MDBContainer className="mt-5">
          <Notification notification={notification} />
          <MDBRow>
            <MDBCol md="8" className="card mb-r mr-2 mb-2">
              <h2 className="text-uppercase my-3">Today:</h2>
              <div id="schedule-items">
                {events.map((event) => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" rounded onClick={this.toggleModal}>
                    Add Event
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3" className="card p-3">
              <h3 className="text-uppercase my-3">Check Today's Weather</h3>
              <h6 className="my-3">
                 You have{" "}
                <b>{events.length} events </b> today.
              </h6>
              <Weather />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* Modal code below: */}
        <MDBModal isOpen={modal} toggle={this.toggleModal}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggleModal}
          >
            Add new event
          </MDBModalHeader>
          <MDBModalBody>
            <MDBModalBody>
              <form className="mx-3 grey-text">
                <MDBInput
                  name="time"
                  label="Time"
                  icon="clock"
                  hint="12:30"
                  group
                  type="text"
                  getValue={this.handleInputChange("time")}
                />
                <MDBInput
                  name="title"
                  label="Title"
                  icon="edit"
                  hint="Briefing"
                  group
                  type="text"
                  getValue={this.handleInputChange("title")}
                />
                <MDBInput
                  name="location"
                  label="Location (optional)"
                  icon="map"
                  group
                  type="text"
                  getValue={this.handleInputChange("location")}
                />
                <MDBInput
                  name="description"
                  label="Description (optional)"
                  icon="sticky-note"
                  group
                  type="textarea"
                  getValue={this.handleInputChange("description")}
                />
              </form>
            </MDBModalBody>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              color="info"
              onClick={() => {
                this.toggleModal();
                this.addEvent();
              }}
            >
              Add
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default AgendaApp;
