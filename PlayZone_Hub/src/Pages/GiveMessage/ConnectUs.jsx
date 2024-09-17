import Swal from 'sweetalert2';

const ConnectUs = () => {

  const requsetOnProcess = () => {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Request Processing',
      showConfirmButton: false,
      timer: 3000
    })
  }
  return (
    <div className=''>

      <div className=''>


        <div className='md:w-full text-center' >
          <h2 className=' font-bold mb-2 text-black'>LET S TALK</h2>
          <div className='md:w-2/4 mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-600 mb-10' >Let s make something great together. We are trusted by over 5000+ clients.</h2>
          </div>
          <p className='md:w-3/4 mb-5 font-semibold text-slate-600 mx-auto '>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

          <button onClick={requsetOnProcess} className='btn btn-wide'>Join Us</button>
        </div>
      </div>

    </div>
  );
};

export default ConnectUs;