import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardProduto from "./components/cardproduto/CardProduto";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Selos from "./components/selos/Selos";
import Home from "./pages/home/Home";
import SobreNos from "./pages/sobrenos/SobreNos";




function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <div className="min-h-[80vh]">
          <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/home"  element={<Home />}/>
          <Route path="/sobrenos" element={<SobreNos />} />
        </Routes>
         <CardProduto />
         <Selos />
        </div>
        <div className="h-5 w-full bg-linear-to-b from-gray-50 to-blue-900" />

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
