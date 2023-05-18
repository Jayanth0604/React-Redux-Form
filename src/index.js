import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "./userReducer";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import Header from "./Header";

const store = createStore(userReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/RegisterPage" element={<RegisterPage />} />
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/UserDetails" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById("root")
);
