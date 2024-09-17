import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../providers/AuthProviders';

const LogIn = () => {

  useTitle("Toys Center|Login")
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const { singIn, setUser, GoogleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.form?.pathname || '/';

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(result => navigate(from, {
        replace: true
      }))
      .catch(error => console.log(error.message))
  }



  const handleLogIn = event => {
    //reload problem solver jonno
    event.preventDefault();



    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);




    singIn(email, password)
      .then(result => {
        const loggesUser = result.user;
        console.log(loggesUser);

        setUser(loggesUser);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successfully Login',
          showConfirmButton: false,
          timer: 3000
        })

        navigate(from, { replace: true });
        form.reset();

      })
      .catch(error => {
        setError("Incorrect Password");
      })
  }
  return (
    <div className=' p-10 mt-16 md:w-3/4 md:mb-20 md:mt-20 mx-auto
        '>
      <div className='flex items-center'>
        <div>
          <img className='w-2/3' src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg" alt="" />
        </div>
        <div className='w-3/4 bg-slate-100 rounded-xl p-5'>
          <h3 className='text-3xl font-bold  mb-10 text-center'>Please Login</h3>

          <form onSubmit={handleLogIn} >
            <div className="form-control container ">
              <label className=' text-xl mb-2 w-1/2 ' htmlFor="">Email</label>
              <input type="text" name='email' placeholder="Enter email" className="input input-bordered input-primary w-full  mb-5" />
              <label className=' text-xl mb-2 w-1/2' htmlFor="">Password</label>
              <input type={show ? "text" : "password"} placeholder="Enter password" name='password' className="input input-bordered input-primary w-full  " />
              <p className='mb-5 text-slate-500' onClick={() => setShow(!show)} >
                <small>
                  {
                    show ? <span>Hide Password</span> : <span>Show Password</span>

                  }
                </small>
              </p>



              <input className='btn btn-wide-full ' type="submit" value="Log In" />
              <p className='text-red-500'>{error}</p>
              <p className='sub-title text-center mt-4 font-bold text-gray-500'>
                New to Food-Corner? <Link to="/signup"><span className='text-black'>Create New account</span></Link>

              </p>
            </div>
          </form>
          <div className='text-center mb-2'>
            <p className='pb-5 mt-10 font-bold  text-xl text-red-600'>SignUp using</p>
            <div className='flex gap-4 justify-center'>
              <button onClick={() => handleGoogleLogin()} className='text-2xl text-green-600'><FaGoogle></FaGoogle> </button>


            </div>

          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};


export default LogIn;