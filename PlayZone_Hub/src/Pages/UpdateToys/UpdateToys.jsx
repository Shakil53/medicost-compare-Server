import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const allDetails = useLoaderData();
  const { customerName, toyName, category, photo, price, quantity, description, rating } = allDetails;
  // const toysData = useLoaderData();
  // const { toyName } = toysData;
  const toysData = useParams();
  // const { _id } = toysData;


  console.log(toysData.id);

  const updateHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateInfo = { price, quantity, description };

    fetch(`https://toys-center-server.vercel.app/toyinfo/${toysData.id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })

  }

  const updatePrice = () => {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Updated',
      showConfirmButton: true,
      timer: 1500
    })
  }

  return (



    <form onSubmit={updateHandler} className="w-1/4 mx-auto md:mt-24">
      <div className="form-control ">
        <label className="label">
          <span className="label-text">Price</span>

        </label>
        <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full max-w-xs" />

      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Quantity</span>

        </label>
        <input type="number" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full max-w-xs" />

      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Description</span>

        </label>
        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full max-w-xs" />

      </div>

      <button onClick={updatePrice} className="btn btn-outline text-center mt-5 md:mb-96">Update Price</button>

    </form>

  );
};

export default UpdateToys;