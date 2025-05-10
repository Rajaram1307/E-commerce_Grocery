import { useState } from "react"
import img1 from "./css/img/bakery.jpg"
import img2 from "./css/img/oil.jpg"
import img3 from "./css/img/fruits.jpg"
import img4 from "./css/img/localmarket.jpg"
import { useNavigate } from "react-router-dom"
function HomeProduct()
{
   const rate = "bi bi-star-fill";
   const[product,setProduct] = useState([
    {
    product:"Fresh Organic Vegetables",
    img:img1,
    price:250,
    rate:4.8
   },
   {
    product:"Premium Kitchen Essentials",
    img:img2,
    price:12500,
    rate:4.9
   },
   {
    product:"Imported Dairy Products",
    img:img3,
    price:3422,
    rate:4.6
   },
   {
    product:"Artisanal Bread Collection",
    img:img4,
    price:2530,
    rate:4.1
   }
])
const navigate= useNavigate();
    const findProduct = ()=>
    {
      navigate("/product/madurai");
    }
    return(
        <>
        <div className="sectionProduct">
        <div className="ProductHeader">
            <h1 className="text-success">Featured Products</h1>
            <p>Discover our handpicked selection of premium quality products.</p>
        </div>
        <div className="link">
            <h4 onClick={findProduct} style={{color:"#08740f"}}>View All Products</h4>
            </div>
            <div className="productCardContainer">
            {
                product.map((data)=>
                (
                    <div className="cardContainer">
                <div className="img">
                    <img src={data.img} alt=""/>
                </div>
                <div className="productDetail">
                    <p>{data.product}</p>
                    <div className="star">
                    <span>
                        <i class={rate}></i>
                        <i class={rate}></i>
                        <i class={rate}></i>
                        <i class={rate}></i>
                        <i class="bi bi-star"></i> {data.rate}
                        </span>
                    </div>
                    <div className="rate">
                    <p>RS.{data.price}</p>
                    <div className="icon">
                    <i class="bi bi-eye"></i>
                    <i class="bi bi-bag-check"></i>
                    </div>
                    </div>
                </div>
            </div>
                ))
            }
            </div>
            </div>
        </>
    )
}
export default HomeProduct