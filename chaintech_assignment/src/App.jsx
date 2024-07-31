/* eslint-disable no-unused-vars */
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Registration></Registration>
    </>
  );
}

export default App;
