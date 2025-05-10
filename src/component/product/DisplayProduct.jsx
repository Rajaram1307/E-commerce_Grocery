import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayProductList from "./DisplayProductList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const DisplayProduct = () => {
    const navigate = useNavigate();
    const { id, location } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const[submit,setSubmit] = useState(true); 
    const [orderDetails, setOrderDetails] = useState({
        name: "",
        phone: "",
        building: "",
        street: "",
        area: "",
        city: ""
    });

    useEffect(() => {
        fetch(`http://localhost:3000/${location}`)
            .then(data => data.json())
            .then(data => {
                const product = data.find(data => id == parseInt(data.id));
                setItem(product);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id, location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUserDetails = async (e) => {
        e.preventDefault(); // prevent form from refreshing the page

        const userData = {
            name: orderDetails.name,
            phone: orderDetails.phone,
            address: {
                building: orderDetails.building,
                street: orderDetails.street,
                area: orderDetails.area,
                city: orderDetails.city
            },
            product: {
                name: item.food_name,
                img: item.foodImg,
                price: item.price,
                delivery: item.delivery_time
            }
        };

        axios.post("http://localhost:3001/User", userData)
            .catch(err => console.log(err));
    };
    const alertMessage = ()=>
    {
        alert("Successfully ordered")
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Navigation/>
        <button onClick={()=>navigate("/product/madurai")} type="button" class="btn btn-outline-success mt-5 ms-5 px-4">Back</button>
        <div className="container mt-4">
            <div className="row">      
                {/* Product Details - Left Side */}
                <div className="col-md-6">
                    <DisplayProductList 
                        img={item.foodImg} 
                        itemName={item.food_name} 
                        description={item.food_description} 
                        catagory={item.food_name} 
                        expire={item.expiry_time}
                        quantity={item.quantity_available}
                        weigth={item.unit}
                        deliveryTime={item.delivery_time}
                        orgAmount={item.original_price}
                        amount={item.price}
                    />
                </div>

                {submit ? (
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Order Details</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleUserDetails}>
                                <div className="mb-3">
                                    <label className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={orderDetails.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        value={orderDetails.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <h5 className="mt-4 mb-3">Delivery Address</h5>

                                <div className="mb-3">
                                    <label className="form-label">Building/House Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="building"
                                        value={orderDetails.building}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Street</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="street"
                                        value={orderDetails.street}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Area</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="area"
                                        value={orderDetails.area}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={orderDetails.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="d-grid mt-4">
                                    <button onClick={()=>setSubmit(false)} type="submit" className="btn btn-success btn-lg">
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>):(<>
                <div className="col-md-6">
    <div className="card shadow">
        <div className="card-header bg-success text-white">
            <h4 className="mb-0">Payment Options</h4>
        </div>
        <div className="card-body">
            <form>
                <div className="mb-4">
                    <h5>Select Payment Method</h5>
                    <div className="form-check mb-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="onlinePayment"
                            value="online"
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="onlinePayment">
                            Online Payment
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="cashOnDelivery"
                            value="cash"
                        />
                        <label className="form-check-label" htmlFor="cashOnDelivery">
                            Cash on Delivery
                        </label>
                    </div>
                </div>

                {/* Online Payment Fields */}
                <div className="online-payment-fields">
                    <div className="mb-3">
                        <label className="form-label">Card Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="1234 5678 9012 3456"
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Expiry Date</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">CVV</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="123"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Name on Card</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="d-grid mt-4">
                    <button onClick={alertMessage} type="submit" className="btn btn-success btn-lg">
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  </>)
}
            </div>
        </div>
        </>
    );
    
};

export default DisplayProduct;
