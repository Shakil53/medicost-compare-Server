import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='md:mb-10'>
      <div>
        <div className=' flex flex-col items-center text-center md:mt-10'>
          <div className='mb-8'>
            <img className='w-3/4 mx-auto' src="https://geek.design/wp-content/uploads/2019/01/BlogGraphic_4_404.png" alt="" />
          </div>

          <div>
            <button className='btn btn-wide'>
              <Link to="/">Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
