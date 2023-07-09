import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  textInput = null;

  setTextInput = (element) => {
    this.textInput = element;
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    let { history } = this.props;
    history.push("/movies?searchText=" + this.textInput.value);
  };

  render() {
    return (
      <div className="alert alert-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Movie Browser
                </Link>
              </h3>
            </div>
            <div className="col-md-8">
              <form onSubmit={this.submitHandler}>
                <input
                  type="search"
                  placeholder="Search..."
                  className="form-control"
                  ref={this.setTextInput}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
