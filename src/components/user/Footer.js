import React from "react";

function Footer() {
  return (
    <div>
      <div id="footer" className="pt-5 pb-3 bg-dark ">
        <div className="row mx-5 py-3 px-md-5">
          <div className="col-12 col-md-3">
            <img
              style={{width: "90px"}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1PKcr8w0qrV0dhh1FKQlabe9O9kWSGGV_w&usqp=CAU"
              alt="Brand Logo"
            />
            <p className="mt-4">Tagline</p>
          </div>
          <div className="col-12 col-md-3 text-start">
            <h3 className="mb-4">Privacy Policy</h3>
            <p className="">
              <a href="#">Privacy Policy</a>
            </p>

            <p className="">
              <a href="#">Terms And Conditions</a>
            </p>

            <p>
              <a href="#">Shipping Delivery Policy</a>
            </p>

            <p>
              <a href="#">Refund Policy</a>
            </p>
          </div>
          <div className="col-12 col-md-3 text-start">
            <h3 className="mb-4">Support</h3>
            <p>
              <a href="contact.html">Contact Us</a>
            </p>

            <p>
              <a href="#">Faqs</a>
            </p>

            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="Product.html">Products</a>
            </p>
          </div>
          <div className="col-12 col-md-3">
            <h3 className="mb-4">Contact US</h3>
            <p>
              <i className="bi bi-geo-alt-fill me-2 fs-5"></i>
              <a href="">KOLUAKALAN, Govindpura 462023</a>
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2 fs-5"></i>
              <a href="tel:917440477473">7440477473</a>
            </p>
            <p>
              <i className="bi bi-envelope-plus-fill me-2 fs-5"></i>
              <a href="mailto:shivanichouksey1702@gmail.com">
                shivanichouksey1702@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="row w-100 mt-5 text-center ">
          <div className="col-12 col-md-6 mb-3 ">
            © 2023,Designed by Shivani Chouksey
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://htmldemo.net/diana/diana/assets/img/icons/payment.webp"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
