import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyDetails = () => {
  const allDetails = useLoaderData();
  const { customerName, toyName, category, photo, price, quantity, description, rating } = allDetails;



  const handlePurchase = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Purchase Successful',
      showConfirmButton: true,
      timer: 2000
    })
  }
  return (
    <div className='mt-20 mb-16'>
      {/* <h2>Toy details comming soon: {toyName}</h2> */}
      <div>
        <div className="card w-3/4 bg-base-100 mx-auto shadow-xl">
          <figure><img src={photo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {toyName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <p>Category : {category}</p>
            <p>Price: {'$' + price}.00</p>
            <p>Quantity: {quantity}</p>
            <p>Seller: {customerName}</p>
            <div>
              <p className='flex items-center '>Rating: {rating}<FaStar className='text-yellow-500'></FaStar></p>
            </div>
            <div className="card-actions justify-end">

              <button onClick={handlePurchase} className="badge badge-outline p-3">Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;