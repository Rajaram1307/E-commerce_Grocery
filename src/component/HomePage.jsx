
import homeimg from "../assets/logo.png"
import HomeSection from "./HomeSection";
import OfferSection from "./OfferSection";
import HomeProduct from "./HomeProduct";
import Description from "./Discription"
import { useNavigate } from "react-router-dom";
function HomePage()
{
    const navigate= useNavigate();
    const findProduct = ()=>
    {
      navigate("/product/madurai");
    }
return(
    <>
    <div className="container-fuild">
   <div className="bodyHome">
    <div className="homeContainer">
        <div className="containers">
            <div className="logo">
                <h1>GreenCart</h1>
            </div>
            <div className="text">
            <h6>Fresh Groceries Delivered</h6>
            <h1>Quality <span style={{color:"green"}}>Groceries</span> Brought Right to Your Door</h1>
            <p>Discover the finest selection of fresh produce, household essentials, and premium products at competitive prices. Serving Iba, Ojo, Lagos, with convenience and quality.</p>
            <div className="button">
            <button onClick={findProduct} type="button" className=" btn btn-outline-success btn-lg" style={{marginLeft:"90px", marginTop:"20px", height:"50px"}}>shop Now</button>
            </div>
            </div>
            
            <div className="img">
            <img src={homeimg} alt="" srcset="" />
            </div>
           
        </div>
    </div>
    </div>
    </div>
        <HomeSection/>
        <OfferSection/>
        <HomeProduct/>
        <Description/>
    </>
)
}
export default HomePage;