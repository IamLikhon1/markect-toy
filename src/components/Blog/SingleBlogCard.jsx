
const SingleBlogCard = ({item}) => {
    const {title,img,date}=item
    return (
        <div>
            <div>
                <img src={img} className="h-[300px] w-[560px] rounded-lg md:hover:scale-105 duration-700 cursor-pointer" alt="" />
            </div>

           <div>
            <div className="flex gap-3 my-3 text-base cursor-pointer">
                <p className="text-[#181D4E] hover:text-[#12AEE0] duration-500">TOYS :</p>
                <p className="text-[#848484] hover:text-[#51525a]">{date}</p>
            </div>
            <div className="mt-3">
                <h2 className="text-3xl text-start text-[#181D4E]">{title}</h2>
            </div>
           </div>
        </div>
    );
};

export default SingleBlogCard;