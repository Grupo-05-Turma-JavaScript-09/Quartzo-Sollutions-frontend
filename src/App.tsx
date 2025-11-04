import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import SobreNos from "./pages/sobrenos/SobreNos";
import Footer from "./components/footer/Footer";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
          <Route path="/"  element={<Home />}/>
       // No App.tsx - MUDE para:
       <Route path="/sobrenos" element={<SobreNos />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
