import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const loader=useLoaderData();
    const{_id,price,quantity,description}=loader
    const navigate=useNavigate()

    // console.log(loader);

    const handleUpdate=(event)=>{
        event.preventDefault();
        const form=event.target;
        const price=form.price.value;
        const quantity=form.quantity.value;
        const description=form.description.value;
        const allUpdate={price,quantity,description}
        // console.log(allUpdate);

        fetch(`https://toys-cars-server.vercel.app/updateToy/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allUpdate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Successfully Updated The Information!',
                    text: 'YaY Updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate('/myToy')
            }
        })
        
        
    }
    return (
        <div className="mx-10 my-20" >
            <h2 className="text-5xl text-center my-12 font-serif font-medium text-violet-500">Update Below Information</h2>
           <form onSubmit={handleUpdate}>
           <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
            <input type="text" name="price" defaultValue={price} className="input input-bordered" required />

            </div>
               
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
            <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" required />

            </div>
                
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail Description</span>
                </label>
            <input type="text" name="description" defaultValue={description} className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
                
                < input type="submit" className="btn btn-success btn-block" value="Update Toy" />
                </div>
           </form>
            </div>
        
    );
};

export default Update;