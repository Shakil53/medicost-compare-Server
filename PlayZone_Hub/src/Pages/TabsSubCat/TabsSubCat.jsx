/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProviders';
import { useContext } from 'react';

const TabsSubCat = ({ toys }) => {
  const { user } = useContext(AuthContext)

  const { _id, customerName, toyName, category, photo, price, quantity, rating, description } = toys;

  const handleDetails = () => {
    if (user) {
      return;

    }
    else {

      Swal.fire({
        position: 'Center',
        icon: 'error',
        title: 'You Have to Login First',
        showConfirmButton: false,
        timer: 1500
      })

    }
  }
  return (
    <div className='text-start mb-24'>
      <div className="lg:max-w-xs p-6 rounded-md shadow-md   dark:bg-gray-900  ">
        <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-900" />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-white">{toyName}</span>
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Price: ${price}</span>
          <div className=" flex items-center gap-1 text-xs font-medium tracking-widest uppercase dark:text-violet-400">Rating: {rating}<FaStar className='text-yellow-400'></FaStar></div>

        </div>


        <Link to={`/toydetails/${_id}`} >
          <button onClick={handleDetails} className=' btn btn-sm bg-white text-black hover:text-white hover:bg-gray-400'>View Details</button>
        </Link>


      </div>
    </div>
  );
};

export default TabsSubCat;