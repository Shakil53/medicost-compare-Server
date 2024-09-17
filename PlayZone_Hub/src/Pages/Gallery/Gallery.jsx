import Swal from 'sweetalert2';

const Gallery = () => {

  const handleBuy = () => {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Purchase Successful',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (

    <div>

      <div className='mt-40 mb-10'>
        <h2 className='text-center md:mb-40 text-3xl md:text-5xl font-bold '>  Ours Toys Collection</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10  px-3 gap-5' >

          <div className="  card md:w-96 bg-base-100 shadow-xl">
            <figure><img data-aos="fade-left" src="https://www.littleriders.com.au/assets/full/XMX-615-R.jpg?20230419134613" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Lamborgini Hygin
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a man chews cars whose cars does he choose?</p>
              <div className="card-actions justify-end">

                <button onClick={handleBuy} className="btn btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img data-aos="fade-left" src="https://cdn11.bigcommerce.com/s-31wmbm/images/stencil/400x600/products/1727/13113/cobra__27713.1669146785.jpg?c=2" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Mirado Panigal
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a man chews cars whose cars does he choose</p>
              <div className="card-actions justify-end">


                <button onClick={handleBuy} className="btn btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img data-aos="fade-left" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95JTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Classical Sadan
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a man chews cars whose cars does he choose</p>
              <div className="card-actions justify-end">

                <button onClick={handleBuy} className="btn btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img data-aos="fade-left" src="https://cdn.pixabay.com/photo/2020/04/24/12/24/model-car-5086647_640.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Classical Royas
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a man chews cars whose cars does he choose</p>
              <div className="card-actions justify-end">

                <button onClick={handleBuy} className="btn btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img data-aos="fade-left" src="https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?cs=srgb&dl=pexels-mike-bird-381228.jpg&fm=jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Sadan Temp
                <div className="badge badge-secondary">Special</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">

                <button onClick={handleBuy} className="btn btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img data-aos="fade-left" src="https://image.made-in-china.com/2f0j00iyRWkNrLCcoY/Kids-Ride-on-Electric-Car-with-Remote-Control-Professional-Manufacture-Cheap-Toys-Car-Kids-Electric-Car-for-Children.webp" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Bugati
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">

                <button onClick={handleBuy} className="btn btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;