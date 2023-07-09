import React, { Component } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import MovieDetails from "./MovieDetails";

class App extends Component {
  state = { message: "Hello, React!!!" };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/movies" component={MovieList} />
            <Route path="/details" component={MovieDetails} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
