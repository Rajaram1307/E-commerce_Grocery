import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchByProduct = () => {
  const [location, setLocation] = useState("madurai");
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    setLocation(e.target.value);
  };

  const handleFindClick = () => {
    navigate(`/product/${location}`);
  };

  return (
    <div className="d-flex justify-content-start align-items-center gap-2">
      <select
        onChange={handleOnchange}
        className="form-select form-select-sm w-25"
      >
        <option value="madurai">madurai</option>
        <option value="chennai">chennai</option>
        <option value="nagapattinam">nagapattinam</option>
        <option value="cuddalore">cuddalore</option>
        <option value="dindugal">dindugal</option>
      </select>
      <button
        onClick={handleFindClick}
        type="button"
        className="btn btn-success btn-sm w-5"
      >
        Find now
      </button>
    </div>
  );
};

export default SearchByProduct;
