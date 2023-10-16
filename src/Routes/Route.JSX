import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router-dom";
import Home from "../Components/Home";
import Productos from "../Components/Productos"
import Registro from "../Components/Registro";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
     <Route path="./Registro" component={Registro}></Route> 
    <Route path="./Productos" component={Productos}></Route>
  </Router>,
  document.getElementById("root")
);