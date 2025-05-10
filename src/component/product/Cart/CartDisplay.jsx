import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CartDisplay = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/Cart")
      .then((data) => data.json())
      .then((data) => {
        setCart(data);
        console.log(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  }, []);

  const handleDeleteCart = async(id)=>
    {
        axios.delete(`http://localhost:3000/Cart/${id}`)
        .then(setCart(cart.filter(item => item.id !== id)))
        .catch(err=>console.log(err))
    }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <button onClick={()=>navigate("/product/madurai")} type="button" class="btn btn-outline-success my-5 ms-2 px-4">Back</button>
      <div className="container mt-4">
        <div className="row">
          {cart.map((data, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
            >
              <div className="card text-center w-100 mb-4 shadow-sm">
                <div className="card-header bg-success text-white">
                  {data.name}
                </div>
                <div className="card-body">
                  <img
                    src={data.img}
                    className="img-fluid rounded mb-2"
                    alt={data.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="card-text fw-bold">₹{data.price}</p>
                  <button onClick={()=>navigate(`/product/${data.location}/${data.id}`)} type="button" class="btn btn-outline-success me-2">Buy Now</button>
                  <button onClick={() =>
                    {
                        handleDeleteCart(data.id)
                    }
                  } className="btn btn-outline-danger">Remove</button>
                </div>
                <div className="card-footer text-muted"><h6>delivery within</h6> {data.delivery}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartDisplay;
