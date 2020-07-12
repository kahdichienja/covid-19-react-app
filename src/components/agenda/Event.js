import React, { Component, Fragment } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import {
    MDBIcon,
    MDBBadge,
  } from "mdbreact"
  
class Event extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: this.props.time,
        title: this.props.title,
      };
    }
    render() {
        const {time, id, title, location, description} = this.props
      return (
        <Fragment>
          <div className="media mt-1">
            <h3 className="h3-responsive font-weight-bold mr-3">
              {time}
            </h3>
            <div className="media-body mb-3 mb-lg-3">
              <MDBBadge
                color="danger"
                className="ml-2 float-right p-2"
                onClick={() => this.props.onDelete(id)}
              >
                <MDBIcon icon="trash" />
              </MDBBadge>
              <h6 className="mt-0 font-weight-bold">{title} </h6>{" "}
              <hr className="hr-bold my-2" />
              {location && (
                <Fragment>
                  <p className="font-smaller mb-0">
                    <MDBIcon icon="location-arrow" /> {location}
                  </p>
                </Fragment>
              )}
            </div>
          </div>
          {description && (
            <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
              {description}
            </p>
          )}
        </Fragment>
      );
    }
  }
  export default Event;