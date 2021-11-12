import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
function App() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {};
    getUser();
  }, []);
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default observer(App);
