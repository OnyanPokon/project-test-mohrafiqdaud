import { Flowbite } from "flowbite-react";
import customTheme from "./customTeheme";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Ideas from "./pages/main/Ideas/Ideas";

function App() {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Navbar />
          <Routes>
            <Route path="/ideas" Component={Ideas}></Route>
            <Route path="/" Component={Ideas}></Route>
            <Route path="/services" Component={Ideas}></Route>
            <Route path="/contact" Component={Ideas}></Route>
            <Route path="/careers" Component={Ideas}></Route>
          </Routes>
        <Footer />
      </Flowbite>
    </>
  );
}

export default App;
