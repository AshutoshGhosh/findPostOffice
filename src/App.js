import "./App.css";
import { Route, Routes } from "react-router-dom";

// Components
import Home from "./components/Home";
import Post from "./components/Post";
import Airport from "./components/Airport";
import NotFound from "./components/404";

// Common components
import Header from "./components/commonComps/Header";
import Footer from "./components/commonComps/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/airport" element={<Airport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
