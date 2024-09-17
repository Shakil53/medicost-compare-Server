/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const MyToysRow = ({ toyEmail, handleDelteToy }) => {

    // quantity, status  we can use
  const { _id, photo, toyName, price, category} = toyEmail;



  return (

    <tr>

      <td>

        <div className="avatar">
          <div className="w-24 rounded">
            <img className='mx-auto' src={photo} />
          </div>
        </div>
      </td>

      <td>
        {toyName}
      </td>

      <td>
        {category}
      </td>

      <td>${price}</td>

      <th>

        <button>
          <Link to={`/updateToys/${_id}`}>Edit</Link>
        </button>

      </th>

      <th>
        <button onClick={() => handleDelteToy(_id)} className="btn btn-circle hover:bg-rose-600 border-none text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
    </tr>

  );
};

export default MyToysRow;