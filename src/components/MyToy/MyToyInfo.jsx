
const MyToyInfo = ({perToy}) => {
    const{sellerName,price,quantity,name,category,_id,picture}=perToy

    return (
        
        <tr>
            
        <td><button className="btn btn-warning">Delete</button></td>
        <th>{sellerName}</th>
        <td><img className="w-16 h-16 rounded-full" src={picture} alt="" /></td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className="btn btn-info">Update</button></td>
      </tr>
     
       
    );
};

export default MyToyInfo;