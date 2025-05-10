import { useState } from 'react';
import './css/homeSection.css'
function HomeSection()
{
    return(
<>
<div className="SectionContainer">
    <div className="Heading">
        <h1 className="text-success">Shop by Category</h1>
        <p>Explore our wide range of products organized by category for your convenience.</p>
    </div>
    <div className="imgContainer">
        <div className="img img1"><p>Fresh Product</p>
        <div className="btn1">
            <button>shop now</button>
        </div>
        </div>
        <div className="img img2"><p>Dairy & Eggs</p>
        <div className="btn1">
            <button>shop now</button>
        </div></div>
        <div className="img img3"><p>Bakery</p>
        <div className="btn1">
            <button>shop now</button>
        </div></div>
        <div className="img img4"><p>Cooking Oils</p>
        <div className="btn1">
            <button>shop now</button>
        </div></div>
        <div className="img img5"><p>Beverages</p>
        <div className="btn1">
            <button>shop now</button>
        </div></div>
        <div className="img img6"><p>Local Market Items</p>
        <div className="btn1">
            <button>shop now</button>
        </div></div>
    </div>
</div>
</>
    )
}
export default HomeSection;