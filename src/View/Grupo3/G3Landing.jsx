import React from "react";
import "../../css/Grupo3/G3Landing.css";
import NavBar from "../../Component/Grupo3/NavBar3";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import VistaPrincipal from "./Vistas1/VistaPrincipal";
import Vista2 from "./Vistas1/Vista2";
import Inscripción from "./Vistas3/Inscripción";
import Vista4 from "./Vistas3/Vista4";
import Vista5 from "./Vistas3/Vista5";

function G3Landing() {
  return (
    <div>
      <NavBar className="paper" />
      <Switch>
        {/* Routing Grupo 3	*/}
        <Route exact path="/Grupo3/VistaPrincipal" component={VistaPrincipal} />
        <Route exact path="/Grupo3/Vista2" component={Vista2} />
        {/*<Route exact path="/Grupo3/Inscripción" component={Inscripción} />*/}
        <Route exact path="/Grupo3/Vista4" component={Vista4} />
        <Route exact path="/Grupo3/Vistas3" component={Vista5} />
        <Route exact path="/Grupo3/Login" component={Login} />

        {/* Fin Routing Grupo 3*/}
      </Switch>
    </div>
  );
}

export default G3Landing;
