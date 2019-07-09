import React, { Component } from "react";
import { connect } from "react-redux";
//import AsyncStorage from "@react-native-community/async-storage";
import AuthorizationStack from "../navigation/AuthorizationStack";
import AppStack from "../navigation/AppStack";
import { init } from "../action-creators/initApp";

const mapStateToProps = state => ({
  token: state.authorization.token
});

const mapDispatchToProps = {
  init
};

class RootContainer extends Component {
  componentWillMount() {
    //AsyncStorage.removeItem('token');
    this.props.init();
  }

  render() {
    const { token } = this.props;
    return (
      <React.Fragment>
        {token ? <AppStack /> : <AuthorizationStack />}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
