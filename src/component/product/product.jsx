import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import ProductList from './productList'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
const Product = ()=>
{
  const navigate = useNavigate();
  const {location} = useParams();
  const[productsData,setProductsData] = useState([]);
  const[loading,setLoading] = useState(true);
  const[sortType,setSortType] = useState('');
  const[filteredValue,setFilteredValue] = useState([]);
  useEffect(()=>
  {
     setLoading(true);
  fetch(`http://localhost:3000/${location}`).
    then(data =>data.json()).
    then(data => {
      setProductsData(data)
      setLoading(false);
  }).
    catch((err) => console.log(err))
    setLoading(false);
  },[location,filteredValue]);
  useEffect(()=>
{
  let filteredValue = [...productsData];

  if(sortType == "ascend")
  {
    filteredValue = filteredValue.sort((a,b)=>a.price - b.price);
  }
  else{
    filteredValue = filteredValue.sort((a,b)=>b.price - a.price);
  }
  setFilteredValue(filteredValue);
},[productsData]);
if(loading)
{
  return(
    <>
    <div>loading</div>
    </>
  )
}
const handleAscenSort = ()=>
{
  setSortType("ascend")
}
const handleDescenSort = () =>
{
   setSortType("descend")
}



const post = filteredValue.map((data) => (
    <ProductList name={data.food_name}
    img={data.foodImg} 
    rate={data.rating} 
    id = {data.id}
    location={location}
    price={data.price} 
    delivery={data.delivery_time}
  />
))
    return(
<>
<Navigation/>
<button onClick={()=>navigate("/")} type="button" class="btn btn-secondary mt-5 ms-4 px-4">Back</button>
<button onClick={handleDescenSort} type="button" class="btn btn-outline-success mt-5 ms-4 px-4">price ↑</button>
<button onClick={handleAscenSort} type="button" class="btn btn-outline-danger mt-5 ms-4 px-4">price ↓</button>
<div className="container-fuild pt-4">
    <h1 className="ms-4">Available groceries near you</h1>
    <div className="row w-100 mb-5"> 
   {post}
  </div>
  </div>
  <Footer/>
</>

    )
}
export default Product