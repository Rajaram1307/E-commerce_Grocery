import { useState } from 'react'
import './css/homeSection.css'
import { useNavigate } from 'react-router-dom';
function OfferSection()
{
    const [offerList,setOfferList] = useState([
        {
            offer:"Weekend Sale - 25% OFF",
            offerDetails:"Get 25% off on all fresh produce this weekend!",
            color:"#FCB045"
        },
        {
            offer:"Buy 2 Get 1 Free",
            offerDetails:"On all bakery items - limited time offer!",
            color:"#79E0D6"
        },
        {
            offer:"New Customers - 10% Discount",
            offerDetails:"Use code WELCOME10 at checkout",
            color:"#E079E0"
        }
    ]);
    const navigate = useNavigate();
    const handleOffer = ()=>
    {
        navigate("/product/madurai")
    }

    return(
<>
<div className="OfferHeader">
<h1 className="text-success">Special Offers</h1>
<p>Don't miss out on these limited-time deals and promotions.</p>
</div>
<div className="offerContainer">
{
    offerList.map((data)=> 
        <div style={{}}>   
    <div className="container container1"  style={{backgroundColor:data.color}}>
        
        <h1>{data.offer}</h1>
        <h3>{data.offerDetails}</h3>
        <div className="Time">
            <div className="span">
                <span>2 <p>days</p> </span>
                <span>14 <p>Hours</p> </span>
                <span>35 <p>Mins</p> </span>
                <span>20 <p>Secs</p></span>
            </div>
            <button onClick={handleOffer} className="ms-5">Shop Now</button>
        </div>
       
    </div>
    </div> 
    ) 
}
</div>   
</>
    )
}
export default OfferSection