import "./App.css";
import Viewers from "./components/Viewers";
import Navbar1 from "./components/Navbar1";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar1 />
      <Home />
      <Services />
      <Viewers />
    </>
  );
}

export default App;
