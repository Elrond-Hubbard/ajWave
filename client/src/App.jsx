import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {io} from "socket.io-client";

import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="mh-100 bg-dark">
        <Outlet />
      </main>
    </>
  );
}

export default App;
