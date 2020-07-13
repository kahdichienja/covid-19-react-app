import React, { Component } from "react";

import Cards from "./Cards/Card";
import CountryPicker from "./CountryPicker/CountryPicker";
import Chart from "./Chart/Chart";
import styles from "./Covid.modules.css";
import { fetchData } from "./Api/index";

import covid19Img from "../../img/covid.jpg";

import {
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";

class Covid extends Component {
  state = {
    country: "",
    data: {},
  };
  async componentDidMount() {
    const fetcheddata = await fetchData();
    this.setState({ data: fetcheddata });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCard className="mt-3">
              <MDBCardImage
                className="img-fluid"
                style={{ width: "100%", height: "30vh" }}
                src={covid19Img}
                waves
              />
              <MDBCardBody>
                <MDBRow className="mt-2">
                  <Cards data={data} />
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
          <MDBRow>

          <MDBCol md="12" xl="12" xs="12" style={{width:'82vw'}}>
            <MDBCard className="mt-3">
              <MDBCardTitle className="p-2">
                <CountryPicker handleCountryChange={this.handleCountryChange} />
              </MDBCardTitle>
              <MDBCardBody>
                   <Chart style={{width:'100%'}} country={country} data={data} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Covid;
