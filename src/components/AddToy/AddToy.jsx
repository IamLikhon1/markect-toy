import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

const AddToy = () => {
    const {user}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const picture=form.picture.value;
        const name=form.name.value;
        const sellerName=form.sellerName.value;
        const email=form.email.value;
        const category=form.category.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const quantity=form.quantity.value;
        const description=form.description.value;
        const allInfo={picture,name,email,sellerName,category,price,rating,quantity,description}

        // console.log(allInfo);

        fetch('http://localhost:5000/addToy',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.insertedId){
                toast.success('Successfully You Added A Toy');
                form.reset()
            }
        })
    }
   
    return (
        <div>
                    <h2 className="text-4xl text-center text-violet-500 ">Add Your Toys</h2>

                    <form onSubmit={handleSubmit} className="mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Picture</span>
                </label>
                <input type="text"  name="picture" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Name</span>
                </label>
                <input type="text"  name="name" className="input input-bordered" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                <input type="text" name="sellerName"  className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category-Choose one:- Sports Car/Truck/Mini Police Car</span>
                    
                    
                </label>
                
                <input type="text" name="category"  className="input input-bordered" required />
                
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email </span>
                </label>
            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />

            </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
            <input type="text" name="price"  className="input input-bordered" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
            <input type="text" name="rating"  className="input input-bordered" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
            <input type="text" name="quantity"  className="input input-bordered" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail Description</span>
                </label>
            <input type="text" name="description"  className="input input-bordered" required />

            </div>
                </div>
            <div className="form-control mt-6">
                
            < input type="submit" className="btn btn-success btn-block" value="Add Toy" />
            </div>
                    </form>
            <div className="card-body">
            
            </div>
            </div>
    );
};

export default AddToy;