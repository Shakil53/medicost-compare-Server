/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Pages/providers/AuthProviders';

const PrivateRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>
  }


  if (user?.email) {
    return children;
  }
  else {

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    return <Navigate to="/login" state={{ form: location }} replace={true} ></Navigate>
  }








};

export default PrivateRoutes;