
const Banner = () => {
    return (
        <div className="my-10">
            <div className="grid md:grid-cols-2 mx-20 items-center">
                <div>
                    <h2 className="text-4xl font-serif font-semibold">A big fun for kids!</h2>
                    <h2 className="text-6xl font-serif font-semibold mt-10 text-violet-500">The Cars Toys World</h2>
                    <h4 className="text-xl mt-10">Delivering smile with toys.Get Your unbeatable fun and leaning experience with our creative cars toys </h4>
                </div>


                <div>
                <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/illustration-different-kind-toys_1308-2216.jpg?w=740&t=st=1684386505~exp=1684387105~hmac=6356282e9ffc0903e0a5ed77db45de1c9e822a98cb52ae456c227c0cd20ee561" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-6">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/colorful-car-toys_1194-2318.jpg?1&w=740&t=st=1684386556~exp=1684387156~hmac=752a8757946b5fcc0a0c7146d4852aecb5056eda3700cddd908e3d809c64a789" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-6">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-6">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/many-colored-little-toy-cars-gray-background_188237-1375.jpg?w=740" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-6">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;