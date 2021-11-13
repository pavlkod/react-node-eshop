import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userApi";
function App() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await check();
        user.setUser();
        user.setIsAuthorize(true);

        console.log(data);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => getUser(), 2000);
  }, []);
  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default observer(App);
