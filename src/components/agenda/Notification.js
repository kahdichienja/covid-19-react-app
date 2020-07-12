import React, { Component } from 'react';
import { MDBAlert } from 'mdbreact';
import { CSSTransition } from 'react-transition-group';
import './Notification.css';

class Notification extends Component {
    state={
        Component: null,
        in: false
    }

    componentDidUpdate = prevProps => {
    let updateComponent;
    const { notification } = this.props;

    if (notification !== prevProps.notification) {

      switch (notification) {
        case "online":
            updateComponent = (
                <MDBAlert color="success" className="center">
                    <span role={'img'} aria-label="emoji">👌</span>  Your Network Is Back again.
                </MDBAlert>);
                break;

        case "offline":
            updateComponent = (
                <MDBAlert color="danger" >
                    <span role="img" aria-label="emoji">☢️</span>  You Lost Internet Connectivity
                </MDBAlert>
                )
                break;
        default:
          break;
      }

      this.setState({Component: updateComponent, in: true}, () => this.setTiemoutHandler());
    }
  }

  setTiemoutHandler = () => {
    setTimeout(() => {
        this.setState({in: false});
    }, 3000);
  }

  render() {
      const { Component } = this.state;

    return (
        Component
            ? <CSSTransition in={this.state.in} mountOnEnter unmountOnExit timeout={500} classNames={{exitActive: 'fade'}}>{Component}</CSSTransition>
            : null
    );
  }
}
export default Notification;