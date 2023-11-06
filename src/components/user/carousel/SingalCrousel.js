import React from 'react'
import img1 from "../../../img/user/banner/slider-01.webp"
import img2 from "../../../img/user/banner/slider-02.webp"
const SingalCrousel = () => {
  return (
    <>
         <div
        id="carouselExampleInterval"
        className="carousel slide  mt-5 mt-md-2"
        data-bs-ride="carousel "
      >
        <div className="carousel-inner">
          <div className="carousel-item active row" data-bs-interval="10000">
            <img
              src={img1}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div
              className="position-absolute top-50 translate-middle col-6"
              style={{left: "38%"}}
            >
              <p className="" style={{fontSize:"2.2vw"}}>
                NEW COLLECTION 2023
              </p>
              <h1 style={{fontSize: "3.5vw", fontWeight: "400"}}>
                New Interior Concept <br />
                Wooden Chairs
              </h1>
              <a
                className="text-decoration-none text-white"
                href="Product.html"
              >
                <button
                  type="button"
                  style={{fontSize: "1.2vw"}}
                  className="btn btn-dark rounded-pill px-2 py-1 py-md-1 px-md-4"
                >
                  Shop Now
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item row" data-bs-interval="2000">
            <img
              src={img2}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div
              className="position-absolute top-50 translate-middle col-6"
              style={{left: "38%"}}
            >
              <p className="" style={{fontSize: "2.2vw"}}>
                NEW COLLECTION 2023
              </p>
              <h1 style={{fontSize: "3.5vw", fontWeight:" 400"}}>
                New Interior Concept <br />
                Wooden Chairs
              </h1>
              <a
                className="text-decoration-none text-white"
                href="Product.html"
              >
                <button
                  type="button"
                  style={{fontSize: "1.2vw"}}
                  className="btn btn-dark rounded-pill px-2 py-1 py-md-1 px-md-4"
                >
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon  rounded-circle "
            style={{backgroundColor:"#FF383F", padding:" 5px"}}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon rounded-circle "
            style={{backgroundColor:"#FF383F", padding:" 5px"}}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default SingalCrousel
