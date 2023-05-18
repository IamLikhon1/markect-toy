
const AllMap = ({perData}) => {
    const{sellerName,price,quantity,name,category}=perData

    return (
       
        <tr>
        <th>{sellerName}</th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <button className="btn btn-outline btn-secondary mt-3 btn-sm ">View Details</button>
      </tr>
        
    );
};

export default AllMap;