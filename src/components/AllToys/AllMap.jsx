import { Link } from "react-router-dom";
import LoadingBarComponent from "../Custome/LoadingBarComponent/LoadingBarComponent";
import { useState } from "react";

const AllMap = ({ perData }) => {
  const { sellerName, price, quantity, name, category, _id } = perData
  const [progress, setProgress] = useState(0)
  return (
    <>
      <LoadingBarComponent progress={progress} setProgress={setProgress} />
      <tr>
        <th>{sellerName}</th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <Link to={`/toy/${_id}`}><button onClick={() => setProgress(100)} className="btn btn-outline btn-secondary mt-3 btn-sm ">View Details</button></Link>
      </tr>
    </>
  );
};

export default AllMap;