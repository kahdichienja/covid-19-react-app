import React, { Component } from "react";

import Cards from "./Cards/Card";
import CountryPicker from "./CountryPicker/CountryPicker";
import Chart from "./Chart/Chart";
import styles from "./Covid.modules.css";
import { fetchData } from "./Api/index";

import covid19Img from "../../img/covid.jpg";

import { MDBRow, MDBContainer } from "mdbreact";

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
      <MDBContainer>
        <div>
          <MDBRow className="mt-2">
            <img
              src={covid19Img}
              style={{ height: "25vh", justifyContent: "center", width: '78vw'  }}
              className={styles.image}
              alt="covid 19 pendamic"
            />
          </MDBRow>
          <MDBRow className="mt-2">
            <Cards data={data} />
          </MDBRow>

          <CountryPicker handleCountryChange={this.handleCountryChange} />

          <div className="card p-3">
            <Chart country={country} data={data} />
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default Covid;
