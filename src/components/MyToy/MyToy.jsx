import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyInfo from "./MyToyInfo";

const MyToy = () => {
    const {user}=useContext(AuthContext);
    const [myToy,setMyToy]=useState([])

    const url=`http://localhost:5000/allToy?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyToy(data)
        })
    },[url])
    return (
        <div>
            <h2 className="text-5xl text-center text-violet-500 font-medium font-serif my-10">My Selected Toys Information</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
    <tr>
        <th><button>Delete Action</button></th>
        <th>Seller Name</th>
        <th>Pictures</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Update Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
      {
        myToy.map(perToy=><MyToyInfo
        key={perToy._id}
        perToy={perToy}
        ></MyToyInfo>)
      }
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyToy;