import { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ToyRow from '../Toy/ToyRow';

const AllToys = () => {
  useTitle("Toys Center|All Toys")

  const [toys, setToys] = useState([]);
  const [showAllData, setshowAllData] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://toys-center-server.vercel.app/toyinfo")


      .then(res => res.json())
      .then(data => setToys(data))

  }, [])

  const handleSearch = () => {
    fetch(`https://toys-center-server.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  const handlingSeeMore = () => {
    setshowAllData(true);
    setDisplayCount(toys.length)

  }



  return (
    <div className='md:mt-20 md:mb-32'>

      <h2 className='text-center text-4xl font-bold mb-5'>Toys Collections</h2>

      <div className='mt-5 mb-10 text-end'>
        <input onChange={(e) => setSearchText(e.target.value)}
          type="text" placeholder="Type here" className="input w-full max-w-xs bg-slate-200 mr-2" /><button
            onClick={handleSearch}
            className='btn btn-outline btn-accent'>Search</button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>

              </th>
              <th>Saller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>


            {
              toys.slice(0, displayCount).map(toy => <ToyRow
                key={toy._id}
                toy={toy}
              ></ToyRow>)
            }

          </tbody>


        </table>
      </div>

      {!showAllData && <div className='text-center mt-5 mb-24'>
        <button onClick={handlingSeeMore} className='btn btn-wide'>See More</button>
      </div>}
    </div>
  );
};

export default AllToys;