import { Route, Switch } from "react-router-dom";
import "./App.css";
import Carts from "./components/carts/carts";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Carts />
      <Switch>
        <Route exact path={"/home"} component={Navbar} />
      </Switch>
    </>
  );
}

export default App;
