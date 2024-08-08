import { Flowbite } from "flowbite-react";
import customTheme from "./customTeheme";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Ideas from "./pages/main/Ideas/Ideas";
import Work from "./pages/main/Work/Work";
import Services from "./pages/main/Services/Services";
import Contact from "./pages/main/Contact/Contact";
import Careers from "./pages/main/Careers/Careers";

function App() {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Navbar />
          <Routes>
            <Route path="/" Component={Work}></Route>
            <Route path="/ideas" Component={Ideas}></Route>
            <Route path="/services" Component={Services}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="/careers" Component={Careers}></Route>
          </Routes>
        <Footer />
      </Flowbite>
    </>
  );
}

export default App;
