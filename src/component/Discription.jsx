import webImg from "./css/img/how-it-work-1.svg"
import webImg2 from "./css/img/landing-img2.webp"
import webImg3 from "./css/img/landing-img3.webp"
import Footer from './Footer'
function Description()
{
    return(
        <>
     <div className="descriptionpage">
            <div className="descriptionHeader">
                <h1>How We're Different</h1>
            </div>
            <div className="description">
            <div className="container">
                <div class="row w-100  ps-3  d-flex justify-content-center align-items-center">
                <div className="col">
                    <img src={webImg} alt="" heigth="400px" width="350px" />
                    </div>
                <div className="col Descriptioncontent">
                <h1>Personalized Service:</h1>
                <p>Unlike large food delivery apps that offer a standard selection of restaurants, our platform allows you to buy and sell food with people you know, adding a personal touch to every transaction.</p>
                </div>
                </div>
             </div>
             
                <div className="container">
             <div class="row w-100  ps-3 d-flex justify-content-center align-items-center">  
             <div className="col">
                <img src={webImg2} alt="" heigth="400px" width="350px" />
                </div>
                <div className=" col Descriptioncontent">
                <h1>Personalized Grocery Shopping:</h1>
                <p>Unlike big grocery delivery apps that provide a generic catalog, our platform lets you buy and sell groceries directly with your community, bringing a personal connection to every purchase.</p>              
                </div>
                </div>
             
             </div>

   <div className="mt-5">
             <div className="container">
             <div class="row w-100  ps-3  d-flex justify-content-center align-items-center">  
                <div className="col">
                <img src={webImg3} alt="" heigth="400px" width="350px" />
                </div>
                <div className=" col Descriptioncontent">
                <h1>Negotiable Pricing:</h1>
             <p> On our platform, you can negotiate the price of fresh groceries with local sellers, helping you save money while promoting fair and friendly community trade.</p>
        </div>
                </div>
             </div>
             </div>
             </div>
             </div>
             <Footer/>
             </>
    )
}
export default Description