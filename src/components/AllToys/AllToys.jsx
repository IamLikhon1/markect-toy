import { useLoaderData } from "react-router-dom";
import AllMap from "./AllMap";

const AllToys = () => {
    const dataLoad=useLoaderData();
    console.log(dataLoad)
    return (
        <div>
            <h2 className="text-5xl text-center text-violet-500 my-10">All Selected Toys </h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full ">
    {/* head */}
    <thead>
      <tr>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View Details button</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
    {
        dataLoad.map(perData=><AllMap
        key={perData._id}
        perData={perData}
        ></AllMap>)
     }
    
     
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllToys;