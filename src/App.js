import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./components/user/UserLayout";
import Home from "./components/user/Home";
import Productdetails from "./components/user/Productdetails";
import { getProduct } from "./redux/actions/product.Actions";
import { useDispatch } from "react-redux";
import { getUserData } from "./redux/actions/user.Action";
import { getRecommondedProduct } from "./redux/actions/recomandProduct.Action";


function App() {
  
  const dispatch=useDispatch()

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
    //get Product=======
    useEffect(() => {
      dispatch(getProduct());
    }, [dispatch]);


    //get Recommonded Product=======
    useEffect(() => {
      dispatch(getRecommondedProduct());
    }, [dispatch]);


      //get user=======
      useEffect(() => {
        dispatch(getUserData());
      }, [dispatch]);
      
  return (
    <>
      <Routes>
        <Route exact path="/" element={<UserLayout />}>

        <Route index element={<Home scrollToTop={scrollToTop} />} />
        <Route exact path="/productdetails/:productId" element={<Productdetails scrollToTop={scrollToTop} />} />

        </Route>
        
      
      </Routes>
    </>
  );
}

export default App;
