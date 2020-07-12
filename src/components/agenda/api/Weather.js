import React, { Fragment, useState } from "react";
import { fetchWeather } from "./fetchWeather";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  //   MDBBtn,
  MDBInput,
  //   MDBModal,
  //   MDBModalBody,
  //   MDBModalHeader,
  //   MDBModalFooter,
  //   MDBIcon,
  //   MDBContainer,
  //   MDBRow,
  MDBCol,
} from "mdbreact";
import "./weather.css";
export const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      // console.log(data);
      setQuery("");
    }
  };

  return (
    <Fragment>
      <div className="my-3">
        <MDBCol xs="12">
          <MDBInput
            hint="Nairobi"
            type="text"
            icon="map"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </MDBCol>
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg; C</sup>
            </div>
            <div className="info my-3">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${
                  weather.weather[0].icon
                }@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>Description: {weather.weather[0].description}</p>
              <p>
                Geo Location: Lat:{weather.coord.lat} Lon{weather.coord.lon}
              </p>
              <p>Wind Speed: {weather.wind.speed}Km/h</p>
              <p>Pressure: {weather.main.pressure}Nm<sup>-2</sup></p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
