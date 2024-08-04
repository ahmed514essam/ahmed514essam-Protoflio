import { Outlet } from "react-router-dom";
import Header from "./MainComponents/Header/Header";
import NavFooter from "./MainComponents/NavFooter/NavFooter";
import Footer from "./MainComponents/Footer/Footer";


export default function () {
  return (
    <>
<Header/>
<Outlet/>
<NavFooter/>
<Footer/>

    </>
  )
}