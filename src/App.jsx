import Root from "./Root";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"


import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projec/Project";
import Skill from "./pages/Skill/Skill";



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
    <Route path="/" element={<HomePage/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/ContactMe" element={<Contact/>} />
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/Skill" element={<Skill/>} />
</Route>

    </Routes>
  </BrowserRouter>
  
  )
}

export default App
