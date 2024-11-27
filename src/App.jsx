import React from "react";
import Router from "./shared/Router";
import UserProvider from "./components/UserProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <UserProvider>
      <Router />
      <ToastContainer/>
    </UserProvider>
  );
};

export default App;
