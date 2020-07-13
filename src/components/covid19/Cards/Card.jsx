import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const LoadingSpinner = () => {
    return (
        <>
            <div className="spinner-border text-success text-center" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    )
}
const Cards =  ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log(props);
    if (!confirmed) {
         
        return <LoadingSpinner/>
    }
    return (
        <>
            <MDBCol md="4" xs="12" className="text-center">

                <MDBCard className={cx(styles.infected)}>
                    <MDBCardBody>
                        <MDBCardTitle>Infected:</MDBCardTitle>
                        <MDBCardTitle>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </MDBCardTitle>
                        <MDBCardText>Updated On:{new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()}</MDBCardText>
                        <MDBCardText>Active Cases Number</MDBCardText>
                    </MDBCardBody>
                </MDBCard>

            </MDBCol>
            <MDBCol md="4" xs="12" className="text-center">

                <MDBCard className={cx(styles.recovered)}>
                    <MDBCardBody>
                        <MDBCardTitle>Recovered:</MDBCardTitle>
                        <MDBCardTitle>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </MDBCardTitle>
                        <MDBCardText>Updated On:{new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()}</MDBCardText>
                        <MDBCardText>Active Recovered Cases </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

            </MDBCol>
            <MDBCol md="4" xs="12" className="text-center">

                <MDBCard className={cx(styles.deaths)}>
                    <MDBCardBody>
                        <MDBCardTitle>Deaths:</MDBCardTitle>
                        <MDBCardTitle>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </MDBCardTitle>
                        <MDBCardText>Updated On:{new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()}</MDBCardText>
                        <MDBCardText>Active Death Cases</MDBCardText>
                    </MDBCardBody>
                </MDBCard>

            </MDBCol>
        </>

    )

}
export default Cards