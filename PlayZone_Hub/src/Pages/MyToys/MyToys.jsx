import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../providers/AuthProviders';
import MyToysRow from './MyToysRow';

const MyToys = () => {
  useTitle("Toys Center|My Toys")

  const [toysEmail, setToysEmail] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://play-zone-hub-server.vercel.app/toyEmail/${user.email}`)
      .then(res => res.json())
      .then(data => setToysEmail(data))

  }, [user])

  

  const handleDelteToy = id => {
    // const proceed = confirm("Are you sure to delete? ");
    // if (proceed) {
    //   fetch(``)
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //     })

    // }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://play-zone-hub-server.vercel.app/toyinfo/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success',

              )
              const remaining = toysEmail.filter(toyEmail => toyEmail._id !== id)
              setToysEmail(remaining);
            }
          })

      }
    })
  }

  console.log(toysEmail);

  const handleConfirm = (id) => {
    fetch(`https://play-zone-hub-server.vercel.app/toyinfo/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",

      },
      body: JSON.stringify({ status: "confirm" })

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = toysEmail.filter(toyEmail => toyEmail._id !== id);
          const updated = toysEmail.find(toyEmail => toyEmail._id === id);
          updated.status = "Successful"
          const newData = [updated, ...remaining];
          setToysEmail(newData);
        }
      })
  }
  return (
    <div>
      {/* <h3>All toys are shown here{toys.length}</h3> */}

      <div className="overflow-x-auto w-full md:mt-24 md:mb-36 ">
        <h2 className='text-center mb-10 text-4xl font-bold text-slate-500 '>My Toys Collection</h2>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>

              <th >Image</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>



            </tr>
          </thead>
          <tbody >



            {
              toysEmail.map(toyEmail => <MyToysRow
                key={toyEmail._id}
                toyEmail={toyEmail}
                handleDelteToy={handleDelteToy}
                handleConfirm={handleConfirm}
              ></MyToysRow>)
            }


          </tbody>


        </table>
      </div>


    </div>
  );
};




export default MyToys;