import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { Unlink, Link2, UserPen, Eye  } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <Container>
            <div className='flex bg-white items-center justify-between'>
                 {/* icon here-----ml-5 md:mr-0 lg:mr-0 mt-1 md:mt-0 lg:mt-0 */}
                <div className='flex items-center gap-1 '>
                    <Unlink className='size-6 bg-blue-500 text-white p-1 rounded-full'></Unlink>
                    <p className='text-3xl font-bold font-abc'>devlinks</p>
                </div>
                <div className='flex items-center gap-2'>
                    <NavLink to='/' className='flex rounded hover:bg-blue-100 bg-blue-50 '>
                        <button className='flex p-2  items-center font-semibold text-black hover:text-blue-500'><Link2 className='size-5 '></Link2><span className='hidden md:block lg:block'>Links</span></button>
                    </NavLink>
                    <NavLink to='/link' className='flex rounded hover:bg-blue-100 bg-blue-50 '>
                        <button className='flex p-2  text-black hover:text-blue-500 items-center font-semibold'><UserPen  className='size-5'></UserPen><span className='hidden md:block lg:block'>Profile Details</span></button>
                    </NavLink>
                    <Button className='text-blue-500 border hover:bg-gray-50 bg-white border-blue-500 px-3 py-2 rounded lg:ml-96 md:ml-30 ml-10 space-x-1 mr-5 md:mr-0 lg:mr-0'><Eye className="size-5 block md:hidden"></Eye><span className='hidden md:block lg:block '>Preview</span></Button>
                </div>
           </div>
        </Container>
    );
};

export default Navbar;