
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const navItems = <>


    <li tabIndex={0}>
      <Link className='font-bold' to="/">Home</Link>

    </li>
    <li tabIndex={0}>
      <Link className='font-bold' to="/about">About</Link>

    </li>

    <li tabIndex={0}>
      <Link className='font-bold' to="/blogs">Blogs</Link>

    </li>
    {user &&
      <li tabIndex={0}>
        <Link className='font-bold' to="/addtoy">Add Toy</Link>

      </li>}
    <li tabIndex={0}>
      <Link className='font-bold' to="/alltoys">All Toys</Link>
    </li>
    {user &&


      <li tabIndex={0}>
        <Link className='font-bold' to="/mytoys">My Toys</Link>

      </li>

    }


  </>
  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}


          </ul>
        </div>
        <img className='w-1/4' src="https://i.ibb.co/3sF0n3Q/Black-Minimalist-Letter-A-Logo.png" alt="" />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {
            navItems
          }


        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex items-center gap-5'>
          {user &&
            <div className="tooltip  tooltip-left mt-3" data-tip={user.displayName}>
              <button>  <img className='h-12 w-12' src={user?.photoURL} alt="" /> </button>
            </div>
          }


          {user ?
            <button onClick={handleLogOut} className="btn">LogOut</button> :
            <Link to='/login'>
              <button className="btn">Login</button>
            </Link>

          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;