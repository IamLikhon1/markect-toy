const RelatedComponent = () => {

    return (
        <div>
            <h2 className="text-4xl md:text-5xl text-[#181d4e] font-semibold mt-5">Related products</h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-8 my-8 md:my-14 mx-3 md:mx-0">
                {/* cardOne */}
                <div>
                <div className="py-8 px-3  border rounded-lg cursor-pointer my-3 md:my-3">
                    <img src="https://img.freepik.com/premium-photo/car-toy-white-background_43314-429.jpg?w=1060" className="mx-auto h-48 w-fit hover:scale-110 duration-500 rounded-md" alt="" />
                </div>

                <div className="text-start mt-5 ml-2">
                    <h2 className="text-[#181D4E] text-xl font-semibold hover:text-sky-500 cursor-pointer duration-300">Mini Cars</h2>
                    <p className="text-[#646672] text-lg mt-2">$15.00</p>
                </div>
                </div>
                {/* cardTwo */}
                <div>
                <div className="py-8 px-3  border rounded-lg cursor-pointer my-3 md:my-3">
                    <img src="https://img.freepik.com/premium-vector/illustration-red-sport-car-toy-withe-background_714605-739.jpg?w=740" className="mx-auto h-48 w-fit hover:scale-110 duration-500 rounded-md" alt="" />
                </div>

                <div className="text-start mt-5 ml-2">
                    <h2 className="text-[#181D4E] text-xl font-semibold hover:text-sky-500 cursor-pointer duration-300">Racing Cars</h2>
                    <p className="text-[#646672] text-lg mt-2">$25.00</p>
                </div>
                </div>

                {/* cardThree*/}
                <div>
                <div className="py-8 px-3  border rounded-lg cursor-pointer my-3 md:my-3">
                    <img src="https://img.freepik.com/premium-psd/colorful-children-s-truck-toy-transport-isolated-transparent-background_901492-411.jpg?w=900" className="mx-auto h-48 w-fit hover:scale-110 duration-500 rounded-md" alt="" />
                </div>

                <div className="text-start mt-5 ml-2">
                    <h2 className="text-[#181D4E] text-xl font-semibold hover:text-sky-500 cursor-pointer duration-300">Truck</h2>
                    <p className="text-[#646672] text-lg mt-2">$30.00</p>
                </div>
                </div>

            </div>

        </div>
    );
};

export default RelatedComponent;