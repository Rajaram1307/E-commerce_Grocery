import SearchByProduct from "./SearchByProduct";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid position-relative">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid d-flex">
          <div className="flex-grow-1">
            <SearchByProduct />
          </div>
        </div>
      </nav>

      {/* Button absolutely positioned at top-right */}
      <button
        onClick={() => navigate('/cart')}
        className="btn btn-outline-light position-absolute"
        style={{ top: '10px', right: '20px', zIndex: 1030 }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <i className="bi bi-cart-plus"></i> View Cart
      </button>
    </div>
  );
};

export default Navigation;
