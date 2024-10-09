/* eslint-disable react/prop-types */


const Container = ({children}) => {
    return (
        <div className='bg-gray-100 max-w-[1280px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;