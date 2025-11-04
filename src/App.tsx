import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import SobreNos from "./pages/sobrenos/SobreNos";
import Footer from "./components/footer/Footer";
import CardProduto from "./components/cardproduto/CardProduto";




function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <CardProduto />
        <div className="min-h-[80vh]">
          <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/sobrenos" element={<SobreNos />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
