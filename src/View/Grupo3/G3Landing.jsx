import React from "react";
import "../../css/Grupo3/G3Landing.css";
import NavBar from "../../Component/Grupo3/NavBar3";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Vista1 from "./Vistas1/Vista1";
import Vista2 from "./Vistas1/Vista2";
import Vista3 from "./Vistas3/Vista3";
import Vista4 from "./Vistas3/Vista4";
import Vista5 from "./Vistas3/Vista5";

function G3Landing() {
  return (
    <div>
      <NavBar className="paper" />
      <Switch>
        {/* Routing Grupo 3	*/}
        <Route exact path="/Grupo3/Vistas1" component={Vista1} />
        <Route exact path="/Grupo3/Vistas1" component={Vista2} />
        <Route exact path="/Grupo3/Vistas3" component={Vista3} />
        <Route exact path="/Grupo3/Vistas3" component={Vista4} />
        <Route exact path="/Grupo3/Vistas3" component={Vista5} />
        <Route exact path="/Grupo3/Login" component={Login} />

        {/* Fin Routing Grupo 3*/}
      </Switch>
    </div>
  );
}

export default G3Landing;
