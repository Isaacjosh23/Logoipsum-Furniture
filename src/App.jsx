import { useEffect } from "react";
import Logoipsum from "./components/Logoipsum";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return <Logoipsum />;
};

export default App;
