import { FaAngleDoubleRight } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';
const About = () => {

  useTitle("Toys Center|About")
  return (
    <div className='mb-20 mt-16'>
      <div className='flex items-center justify-around gap-20 p-5'>
        <div className='w-1/2' >
          <h3 className='font-bold text-orange-500'>ABOUT TOYS CENTER</h3>
          <h1 className='text-4xl mt-5 mb-5 font-bold'>Company Value</h1>

          <p className='text-gray-500 font-semibold mb-5'>We pride ourselves on delivering exceptional customer service. Our friendly and knowledgeable staff is here to assist you every step of the way, from answering product inquiries to resolving any concerns you may have. We offer a seamless online shopping experience through our user-friendly website, ensuring convenient browsing.</p>

          <div className='text-gray-500 font-semibold mb-5'>
            <div className='flex items-center gap-2 mb-2 '>
              <p className='font-bold text-orange-500'><FaAngleDoubleRight></FaAngleDoubleRight> </p>
              <span>Every toy has a story to tell, and every child becomes the author.</span>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <p className='font-bold text-orange-500'><FaAngleDoubleRight></FaAngleDoubleRight> </p>
              <span>Play is the fuel that ignites the fire of learning.</span>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <p className='font-bold text-orange-500'><FaAngleDoubleRight></FaAngleDoubleRight> </p>
              <span>When you give a child a toy, you give them a key to unlock their imagination.</span>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <p className='font-bold text-orange-500'><FaAngleDoubleRight></FaAngleDoubleRight> </p>
              <span>Toys are the tools that unlock the power of imagination and bring dreams.</span>
            </div>
          </div>
        </div>


        <div className='w-1/2 ' >

          <img className='rounded-xl shadow-xl' src="https://www.callcentrehelper.com/images/stories/2015/02/team-meeting-circle-760.jpg" alt="" />

        </div>
      </div>
    </div >
  );
};

export default About;