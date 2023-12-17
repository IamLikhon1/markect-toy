
const SingleTrading = ({item}) => {
    const {name,picture,price}=item
    console.log(item);
    return (
        <div>

            <div className="py-8 px-3  border rounded-lg cursor-pointer ">
                <img src={picture} className="mx-auto h-48 w-fit hover:scale-110 duration-500 rounded-md" alt="" />
            </div>

            <div className="text-center mt-5">
                <h2 className="text-[#181D4E] text-xl font-semibold hover:text-sky-500 cursor-pointer duration-300">{name}</h2>
                <p className="text-[#646672] text-lg mt-2">${price}.00</p>
            </div>
            
        </div>
    );
};

export default SingleTrading;