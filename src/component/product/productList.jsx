import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProductList=(props) =>
{
    const rate = "bi bi-star-fill";
    const navigate = useNavigate();
    const handleCart = async(id,name,img,price,delivery,loc) =>
      {
          axios.post("http://localhost:3000/Cart",{
              "id" : id,
              "name":name,
              "img" : img,
              "price":price,
              "delivery":delivery,
              "location":loc
          })
          .then(alert(name+" added to your Cart"))
          .catch(err=>console.log(err))
      }

    return(
        <>
        <div className="cardContainer">
                <div className="img">
                    <img src={props.img} alt=""/>
                </div>
                <div className="productDetail">
                  <div className="row"><p><b>{props.name}</b></p></div>
                    
                    <div className="star">
                    <span>
                        <i className={rate}></i>
                        <i className={rate}></i>
                        <i className={rate}></i>
                        <i className={rate}></i>
                        <i className="bi bi-star me-3"></i> {props.rate}
                        </span>
                        <button  onClick={() =>
                      {
                        navigate(`/product/${props.location}/${props.id}`)
                      }
                    } className="ms-3 btn btn-success w-25">Buy</button>
                    </div>
                    <div className="rate">
                    <p>RS.{props.price}</p>
                    <div className="icon">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-bag-check" onClick={() =>
                      handleCart(props.id,props.name,props.img,props.price,props.delivery,props.location)
                    }></i>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}
export default ProductList