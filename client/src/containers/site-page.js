import React, { Component } from 'react';
import { connect } from 'react-redux';




 class SitePage extends Component {
  render(){
    console.log("site-page's this.props.view:");
    console.log(this.props.view);
    if (this.props.view != "SHOW_SITE") {
      return <div></div>
    }

    return (
      <div className="sitePage">
        <h1>Welcome to site page!</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(SitePage);
