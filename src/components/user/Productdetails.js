import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";


import { useSelector } from "react-redux";

function Productdetails(props) {
  const [filter, setFilter] = useState([]);
const [showDetail,setShowDetails]=useState(false)
  const params = useParams();

  const { addItem, inCart, setCartMetadata } = useCart();

  const productsData = useSelector((state) => state.getProduct.Product);
  const recommandedProduct = useSelector((state) => state.getRecommandedProduct.Product);


  const filterProduct = productsData.filter(
    (item) => item.id === params.productId
  )



  const handelAddToCart = (item) => {
    addItem(item);
    toast.success("Your item has been successfully added to your cart.", {
      position: "top-center",
    });
  };

 

  useEffect(() => {
  
    setFilter(recommandedProduct);
  }, []);

  const handlCategory = (data) => {

    const filterData = recommandedProduct.filter((item) => item.category === data);
    setFilter(filterData);
  };

  return (
    <>
      <div style={{ backgroundColor: " #eee" }}>
        <section className="container ">
          <div className="row my-5 ">
            <div className="col-12 col-md-6 p-4">
              <img
                src={`${filterProduct[0] && filterProduct[0].img}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 p-4">
              <h1 style={{ color: "#444444;" }}>
                {filterProduct[0] && filterProduct[0].name}{" "}
              </h1>
              <p className="card-text" style={{ color: "#FF383F;" }}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <span className="text-dark">(No review)</span>{" "}
              </p>
              <p className="mt-0">
                <span className="fs-4 " style={{ color: "#FF383F;" }}>
                  ₹ {filterProduct[0] && filterProduct[0].price}
                </span>
                <span className="text-decoration-line-through">
                  ₹ {filterProduct[0] && filterProduct[0].oldPrice}{" "}
                </span>
              </p>
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                labore ipsum quos deleniti eligendi facilis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Architecto, mollitia!
                Optio quod repellat rerum. Corporis.
              </p>
              <div className="d-flex gap-3 mb-2">
                <p>
                  <strong
                    className="fs-5 fw-normal "
                    style={{ color: "#444444" }}
                  >
                    Size :{" "}
                  </strong>
                </p>
                <div
                  className="btn-group gap-3"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary rounded"
                    htmlFor="btnradio1"
                  >
                    SM
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary rounded"
                    htmlFor="btnradio2"
                  >
                    MD
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary rounded"
                    htmlFor="btnradio3"
                  >
                    LG
                  </label>
                </div>
              </div>
              <p>
                <strong
                  className="fs-5 fw-normal "
                  style={{ color: "#444444" }}
                >
                  Material :
                </strong>
                <a className="btn btn-secondary-outline" href="#">
                  {" "}
                  Fiber
                </a>{" "}
                <a className="text-decoration-none text-black-50" href="#">
                  Wood
                </a>
              </p>
             
              <div>
                <button
                  onClick={() => handelAddToCart(filterProduct[0])}
                  style={{ backgroundColor: "#FF383F" }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#cartPreview"
                  aria-controls="cartPreview"
                  className=" btn text-white px-3 me-3 add-to-cart"
                >
                  Add To Cart
                </button>

                <i className="bi bi-heart btn border  like-btn"></i>
              </div>
              <p className="mt-3">
                <strong
                  className="fs-5 fw-normal "
                  style={{ color: "#444444" }}
                >
                  Share :
                </strong>{" "}
                <i className="bi bi-instagram fs-4 text-muted ms-3 icon"></i>
                <i className="bi bi-facebook mx-3  fs-4 text-muted icon"></i>
                <i className="bi bi-whatsapp  fs-4 text-muted icon"></i>
              </p>
              <a
                href=""
                className="btn text-white px-5 me-3 add-to-cart"
                style={{ backgroundColor: "#FF383F" }}
              >
                Buy now
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Review
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Comments
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active p-5"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in
                quisquam recusandae quaerat harum cumque ratione accusamus
                expedita quasi ab similique nobis ducimus, esse delectus est
                repellendus praesentium eaque voluptatum quia obcaecati.
                Voluptates qui magni similique accusantium voluptate ut natus.
                <br />
                <br />
                <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ipsum hic officiis ullam ad veritatis reprehenderit iste,
                aperiam repellat commodi atque nam, eligendi quisquam alias
                molestias totam quaerat voluptas pariatur, esse velit labore
                maxime vitae nemo. Veniam eos rerum quo vitae.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <form action="" className="col-7 ms-auto me-auto py-5">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Enter Your Name :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                  />
                </div>
                <p className="card-text" style={{ color: "#FF383F;" }}>
                  <span className="text-dark">Rating :</span>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </p>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Enter Review :
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn add-to-cart"
                  style={{ backgroundColor: " #FF383F", color: "#fff " }}
                >
                  submit
                </button>
              </form>
            </div>
            <div
              className="tab-pane fade p-5"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex="0"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                fugit, nam autem unde earum ducimus quas molestiae ut odit?
                Facilis adipisci inventore ex ratione ipsa? Iste fugiat omnis
                optio reiciendis.
              </p>
            </div>
          </div>
        </section>
        <section className="container position-relative">
          <div className="mt-4 col-12">
            <h1>Related Products</h1>
            <p>
              Some of our customers say that they trust us and buy our product
              without any hesitation because they believe us and always happy to
              buy our product.
            </p>
            <div className="d-flex">
              <p>Filter Product by Category :</p>
              <div>
                <button
                  onClick={() => handlCategory("chair")}
                  className="btn btn-warning me-3"
                >
                  Chair
                </button>
                <button
                  onClick={() => handlCategory("table")}
                  className="btn btn-warning"
                >
                  Table
                </button>
              </div>
            </div>
          </div>

          <div className="new ">
            <div className="row mt-5">
              
              {filter.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="card col-12 col-md-3 shadow p-3 mb-3  me-3 bg-body-tertiary rounded me-md-3"
                    style={{ width: "18rem" }}
                  >
                    <div
                      id="card-icon"
                      className="position-absolute d-flex justify-content-between w-100"
                    >
                      <i className="bi bi-heart py-2 px-4 text-muted fw-bolder fs-4 icon"></i>
                      <Link to={`/productdetails/${item.id}`} onClick={props.scrollToTop}>
                        <i className="bi bi-eye-fill py-3 px-5 fs-4 text-muted icon"></i>
                      </Link>
                    </div>

                    <img
                      src={`${item.img}`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text" style={{ color: "#FF383F;" }}>
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
                        onClick={() => handelAddToCart(item)}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartPreview"
                        aria-controls="cartPreview"
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
      </div>
    </>
  );
}

export default Productdetails;
