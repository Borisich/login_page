import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSite } from '../actions/index';
import { showError } from '../actions/index';
import { bindActionCreators } from 'redux';

class LoginForm extends Component {
  render(){
    console.log("login-form's this.props.view:");
    console.log(this.props.view);
    if (this.props.view == "SHOW_SITE") {
      return <div></div>
    }
    return (
      <div>
        Login form:
        <br />
        Login: <br /><input type='text' width='50px'></input>
        <br />
        Password: <br /><input type='text' width='50px'></input>
        <br /><br />
        <button onClick={() => this.props.showSite()}>Верный пароль</button>
        <button onClick={() => this.props.showError()}>Неверный пароль</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    view: state.view
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showSite: showSite, showError: showError}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
