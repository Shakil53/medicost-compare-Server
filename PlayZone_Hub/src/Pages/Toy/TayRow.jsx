/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
  const { _id, customerName, toyName, category, photo, price, quantity } = toy;
  return (


    <tr>
      <th>

      </th>
      <td>
        <div className="flex items-start">
          <div className="avatar">

          </div>
          <div>
            <div className="font-semibold">{customerName}</div>

          </div>
        </div>
      </td>
      <td>

        {toyName}
      </td>
      <td>

        {category}
      </td>
      <td>{"$ " + price}</td>
      <td>{quantity}</td>
      <th>

        {/* <button className="btn btn-ghost btn-xs">details</button> */}

        <Link to={`/toydetails/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
      </th>
     
    </tr>


  )
}

export default ToyRow;