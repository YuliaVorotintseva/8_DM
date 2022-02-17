import React, { Component } from "react";
import { Route, Routes, Navigate, useRoutes } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route
              path='*'
              element={<Navigate to='/' />}
            />
          </Routes>
        </Root>
      </div>
    );
  }
}

export default App;