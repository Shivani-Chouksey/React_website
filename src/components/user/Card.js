import React from "react";
import { useCart } from "react-use-cart";

function Card() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  if (isEmpty)
    return (
      <div className="p-4 card mx-5 my-3">
        <p>Your cart is empty</p>
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#cartPreview"
          aria-controls="cartPreview"
          className="btn btn-success"
        >
          Countinue Shoping
        </button>
      </div>
    );
  return (
    <>
      <div className="p-4">
        <h3>Cart ({totalUniqueItems})</h3>

        {items.map((item) => (
          <div key={item.id} className="card mb-3" style={{ maxWidth: "540px;" }}>

          
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`${item.img}`} className="img-fluid rounded-start" style={{width:"100%",height:"100%",objectFit:"cover"}} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
              <p className="card-title fw-bold"> Product Name: <span className="fw-normal">{item.name}</span></p>

              

                  <p className="card-text fw-bold">
                    Quantity : <span className="bg-warning px-2 py-1">{item.quantity}</span>
                
                  </p>
                  <p className="fw-bold">Price : ₹{item.price *item.quantity }</p>
                  <div className="d-flex justify-content-between align-item-center" >
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button className="btn btn-warning">{item.quantity}</button>
                    <button
                    className="btn btn-success"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  </div>
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
              </div>
                 

              
                  
                 
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
