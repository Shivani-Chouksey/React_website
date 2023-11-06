import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {


  const [data, setData] = useState({});
  const [loginUser, setLoginUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const User = useSelector((state) => state.getUser.userData);

console.log("userd",User)
  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async(e) => {
    try {
        e.preventDefault();
        if(User.username===data.username && User.password === data.password){

         // Successful login
            toast.success("Login Successfully", {
                position: "top-center",
            })
            setLoginUser(true)
       
            setData({})
            setShowModal(false);
        }else {
        // Invalid credentials
        toast.error("Please Enter Valid Credentials", {
          position: "top-center",
        });
      }
       
    } catch (error) {
        toast.error("Please Enter a Valid Credentails", {
            position: "top-center",
        })
    }
   
  };

  const handleLogout=()=>{
    setLoginUser(false)
  }

  return (
    <>
      <div>
        <header>
          <nav className="navbar shadow p-3 mb-5 bg-body-tertiary fixed-top navbar-expand-lg bg-white py-2">
            <div className="container-fluid text-dark mx-1 mx-md-5 px-2 px-md-5 ">
              <div className="mx-auto">
                <a className="navbar-brand me-5 me-md-5" href="#">
                  <img
                    style={{ height: "50px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1PKcr8w0qrV0dhh1FKQlabe9O9kWSGGV_w&usqp=CAU"
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler ms-5 px-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="bi bi-list"></i>
                  </span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-auto">
                  <li className="nav-item me-3">
                    <Link
                      to="/"
                      className="nav-link active text-dark"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link text-dark" href="Product.html">
                      Product
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-dark" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0 ms-5">
                  <li className="nav-item me-3 fs-4">
                    {
                        loginUser?<h6 className="mt-3">{User.name}</h6>:<button
                        type="button"
                        className="nav-link text-dark"
                       
                        onClick={() => setShowModal(true)}
                      >
                        <i className="bi bi-person-circle"></i>
                      </button>
                    }
                 
                  </li>
                  <li className="nav-item me-3 fs-4">
                    <a className="nav-link text-dark" href="#">
                      <i className="bi bi-search"></i>
                    </a>
                  </li>
                  <li className="nav-item me-3 fs-4">
                    <a className="nav-link text-dark" href="#">
                      <i className="bi bi-heart"></i>
                    </a>
                  </li>

                  <li className="nav-item fs-4 me-3">
                    <button
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#cartPreview"
                      aria-controls="cartPreview"
                      className="nav-link text-dark"
                      href="#"
                    >
                      <i className="bi bi-cart3"></i>
                    </button>
                  </li>
                  {
                       ! loginUser?<h6 className="mt-3">{""}</h6>:<button
                        type="button"
                        className=" btn btn-danger  "
                      
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    }
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* <!-- Modal --> */}
      
        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={loginHandler}>
          <div class="mb-3">
                  <label for="name" class="form-label">
                    Enter User Name :{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="username"
                    onChange={handleOnchange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Enter Password :
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="exampleInputPassword1"
                    onChange={handleOnchange}
                  />
                </div>
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </form>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default Navbar;
