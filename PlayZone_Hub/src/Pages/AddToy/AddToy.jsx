import { useContext } from "react";
import Swal from 'sweetalert2';
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../providers/AuthProviders";


const AddToy = () => {
  useTitle("Toys Center|Add Toy")

  const { user } = useContext(AuthContext);

  const handleToyInfoSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.toyName.value;
    const name = form.name.value;
    const email = user?.email;
    const category = form.categories.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const order = {
      customerName: name,
      email,
      toyName,
      photo,
      category,
      rating,
      price,
      quantity,
      description
    }
    console.log(order);

    fetch('https://toys-center-server.vercel.app/toyinfo', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'middle-center',
            icon: 'success',
            title: 'Added Successfully',
            showConfirmButton: true,
            timer: 1500,

          })


        }
        form.reset()
      })
  }



  return (
    <div>



      <div className="md:mt-24" >

        <div className="card flex-shrink-0 w-full p-10 shadow-2xl bg-base-100">
          <h3 className="text-center text-4xl font-bold" >Post your Add Here</h3>
          <form onSubmit={handleToyInfoSubmit} >
            <div className="card-body  ">
              <div >
                <div className='grid grid-cols-2 gap-5 mt-0'>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Toy Name" name="toyName" className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" placeholder="Seller Name" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" required defaultValue={user?.email} className="input input-bordered" />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Categories</span>

                    </label>
                    <select type="text" name="categories" className="select select-bordered">
                      <option disabled selected>Select Categories</option>
                      <option>Remote Control</option>
                      <option>AutoMatic Control</option>
                      <option>Dummy Racing</option>

                    </select>

                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Pice </span>
                    </label>
                    <input type="number" placeholder="$"
                      name='price' className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Rating </span>
                    </label>
                    <input type="number" placeholder="Ratings"
                      name='rating' className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Available Quantity </span>
                    </label>
                    <input type="number" placeholder="Quantity"
                      name='quantity' className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input type="text"
                      name='description' placeholder="Description" className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Photo URl</span>
                    </label>
                    <input type="text"
                      name='photo' placeholder="Url" className="input input-bordered" />
                  </div>

                  <div className="form-control mt-6">


                    <input className="btn border-none h-full bg-red-600 text-white" type="submit" value="Add Toy" />
                  </div>

                </div>






              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default AddToy;