import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyInfo from "./MyToyInfo";
import Swal from "sweetalert2";
import UseTitle from "../../hooks/UseTitle";

const MyToy = () => {
    const {user}=useContext(AuthContext);
    const [myToy,setMyToy]=useState([])
    UseTitle('My Toy')

    const url=`https://toys-cars-server.vercel.app/allToy?email=${user.email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyToy(data)
        })
    },[url]);
    const handleDelete=(id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`https://toys-cars-server.vercel.app/toyDelete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                        const remaining = myToy.filter(toy => toy._id !== id);
                        setMyToy(remaining);
                    }
                })

        }
    })

    }
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
        handleDelete={handleDelete}
        ></MyToyInfo>)
      }
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyToy;