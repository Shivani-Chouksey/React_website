import React from "react";
import SingalCrousel from "./carousel/SingalCrousel";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Home(props) {

  const { addItem, inCart, setCartMetadata } = useCart();


  //get product ======
  const Product = useSelector(state => state.getProduct.Product);
  
  const handelAddToCart=(item)=>{
    addItem(item)
    toast.success("Your item has been successfully added to your cart.", {
        position: "top-center",
    });
  }
  return (
    <>
      <SingalCrousel />
      <section className="container position-relative">
        <div className="mt-4 col-12">
          <h1>New Arrivals</h1>
          <p>
            Some of our customers say that they trust us and buy our product
            without any hesitation because they believe us and always happy to
            buy our product.
          </p>
        </div>

        <div className="new">
          <div className="row px-1">

            {Product.map((item, i) => {
              return (
                <div key={i}
                  className="card col-12 col-md-3 shadow p-3 mb-3  me-3 bg-body-tertiary rounded me-md-3"
                  style={{ width: "18rem" }}
                >
                  <div
                    id="card-icon"
                    className="position-absolute d-flex justify-content-between w-100"
                  >
                    <i className="bi bi-heart py-2 px-4 text-muted fw-bolder fs-4 icon"></i>
                    <Link onClick={props.scrollToTop} to={`/productdetails/${item.id}`}>
                      <i className="bi bi-eye-fill py-3 px-5 fs-4 text-muted icon"></i>
                    </Link>
                  </div>

                  <img src={`${item.img}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text" style={{ color: "#FF383F" }}>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </p>
                    <p className="mt-0">
                      <span className="fs-4">₹{item.price}</span>
                      <span className="text-decoration-line-through">
                        ₹{item.oldPrice}
                      </span>
                    </p>
                    <button
                      onClick={()=>handelAddToCart(item)}
                      type="button" data-bs-toggle="offcanvas" data-bs-target="#cartPreview" aria-controls="cartPreview"
                      className=" btns btn btn-secondary col-12"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
