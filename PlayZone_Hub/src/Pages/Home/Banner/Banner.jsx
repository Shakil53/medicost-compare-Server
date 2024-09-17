
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Banner = () => {


  return (
    <div className="carousel md:w-full h-[500px] md:h-[700px] mx-2">
      <div id="slide1" className="carousel-item relative md:w-full ">
        <img src="https://m.media-amazon.com/images/I/61taLUjwxCL._SL1457_.jpg" className=" w-2/3 md:w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white px-2 md:pl-24 text-start md:text-start  w-1/2  md:space-y-7 md:w-1/2">
            <div data-aos="md:fade-right " className="">
              <h2 className=" text-4xl mx-auto md:text-6xl font-bold">Delivering Exhilarating Fun For All Ages.</h2>
              <p className="mx-auto mt-2 text-gray-300">A sleek and futuristic toy car with turbocharged engines, it zooms across the floor, leaving a trail of excitement in its wake.</p>
            </div>
            <div className="mt-5 ">
              <button className="btn  bg-red-600 border-none text-white hover:bg-white hover:text-black mr-5">Order Now</button>
              <button className="btn btn-outline text-white border-white hover:text-black hover:bg-white hover:text-back">Contact us</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-10">
          <a href="#slide4" className="btn btn-circle mr-5 ">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative md:w-full ">
        <img src="https://www.dealsdirect.co.nz/wp-content/uploads/2021/07/602_1477-scaled.jpg" className=" w-2/3 md:w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white px-2 md:pl-24 text-start md:text-start w-1/2  md:space-y-7 md:w-1/2">
            <div data-aos="md:fade-right " className="">
              <h2 className=" text-4xl mx-auto md:text-6xl font-bold">Delivering Exhilarating Fun For All Ages.</h2>
              <p className="mx-auto mt-2 text-gray-300">A sleek and futuristic toy car with turbocharged engines, it zooms across the floor, leaving a trail of excitement in its wake.</p>
            </div>
            <div className="mt-5 ">
              <button className="btn  bg-red-600 border-none text-white hover:bg-white hover:text-black mr-5">Order Now</button>
              <button className="btn btn-outline text-white border-white hover:text-black hover:bg-white hover:text-back">Contact us</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 md:right-5 md:top-10">
          <a href="#slide1" className="btn btn-circle mr-5 ">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative md:w-full ">
        <img src="https://images.unsplash.com/photo-1560260369-3eea8c1f8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN3fGVufDB8fDB8fA%3D%3D&w=1000&q=80" className=" w-2/3 md:w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white px-2 md:pl-24 text-start md:text-start w-1/2  md:space-y-7 md:w-1/2">
            <div data-aos="md:fade-right " className="">
              <h2 className=" text-4xl mx-auto md:text-6xl font-bold">Delivering Exhilarating Fun For All Ages.</h2>
              <p className="mx-auto mt-2 text-gray-300">A sleek and futuristic toy car with turbocharged engines, it zooms across the floor, leaving a trail of excitement in its wake.</p>
            </div>
            <div className="mt-5 ">
              <button className="btn  bg-red-600 border-none text-white hover:bg-white hover:text-black mr-5">Order Now</button>
              <button className="btn btn-outline text-white border-white hover:text-black hover:bg-white hover:text-back">Contact us</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-10">
          <a href="#slide2" className="btn btn-circle mr-5 ">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative md:w-full ">
        <img src="https://rare-gallery.com/uploads/posts/535359-automobile-car.jpg" className=" w-2/3 md:w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white px-2 md:pl-24 text-start md:text-start w-1/2  md:space-y-7 md:w-1/2">
            <div data-aos="md:fade-right " className="">
              <h2 className=" text-4xl mx-auto md:text-6xl font-bold">Delivering Exhilarating Fun For All Ages.</h2>
              <p className="mx-auto mt-2 text-gray-300">A sleek and futuristic toy car with turbocharged engines, it zooms across the floor, leaving a trail of excitement in its wake.</p>
            </div>
            <div className="mt-5 ">
              <button className="btn  bg-red-600 border-none text-white hover:bg-white hover:text-black mr-5">Order Now</button>
              <button className="btn btn-outline text-white border-white hover:text-black hover:bg-white hover:text-back">Contact us</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-10">
          <a href="#slide3" className="btn btn-circle mr-5 ">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

  );
};

export default Banner;