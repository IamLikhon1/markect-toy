import { Link } from "react-router-dom";

const AllMap = ({perData}) => {
    const{sellerName,price,quantity,name,category,_id}=perData

    return (
       
        <tr>
        <th>{sellerName}</th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <Link to={`/toy/${_id}`}><button className="btn btn-outline btn-secondary mt-3 btn-sm ">View Details</button></Link>
      </tr>
        
    );
};

export default AllMap;