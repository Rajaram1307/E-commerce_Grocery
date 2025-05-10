import { useState } from "react"
const DisplayProductList = (props)=>
{
    const [Count,setCount] = useState(1);
    const handleDec = () =>
    {
        if(Count > 0)
        {
        setCount(Count-1);
        }
    }
     const handleInc = () =>
    {  
        setCount(Count+1);
    }
    return(
        <>
         <div className="container mt-5">
                <div className="row ">
                <div className="card" style={{ width: "34rem" }}>
                    <img src={props.img} className="card-img-top rounded" alt={props.img} height="290px" />
                    <div className="card-body">
                        <h5 className="card-title h1">{props.itemNamw}</h5>
                        <p className="card-text h5"><b>Description :</b> {props.description}</p>
                        <p className="card-text h5"><b>Category:</b> {props.catagory ? "Vegetarian" : "Non-Vegetarian"}</p>
                        <p className="card-text h5"><b>Expired Time:</b> {props.expire}</p>
                        <div className="d-flex">
                             <p className="card-text h5 pe-5"><b>Available Qty : </b> {props.quantity}</p>
                             <p className="card-text h5"><b>Select Qty:</b> <b><i onClick={handleDec} className="bi bi-dash"></i></b> {Count} <b> <i onClick={handleInc} className="bi bi-plus-lg "></i></b> </p>
                        </div>
                        <p className="card-text h5"><b>weigth :</b> {props.weigth}</p>
                        <p className="card-text h5"><b>Delivery within :</b> {props.deliveryTime}</p>
                        <h4 className="text-success h5"><b>Amount for 1 Qty :</b> $<del>{props.orgAmount}</del> ${props.amount}</h4>
                        <h4 className="text-success h5"><b> Total Amount for {Count} : </b> ${Count * props.amount}</h4>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default DisplayProductList