import img from '../../assets/mobilemockup.jpg';

const LeftSideContainer = ({ state }) => {
    console.log(state);
    return (
        <div className="flex flex-col items-center">
        {/* Displaying the user's image */}
        <div className="mb-4">
          <img
            src={img} // Update this path with your image file path
            alt="Profile"
            className="rounded-full w-24 h-24"
          />
        </div>
  
        {/* Displaying the links with platform names */}
        <div className="space-y-4 w-full max-w-sm">
          {state.map((item, index) => (
            <div
              key={item.id}
              className={`flex justify-between items-center py-3 px-5 rounded-lg text-white ${
                item.platform === 'GitHub'
                  ? 'bg-black'
                  : item.platform === 'YouTube'
                  ? 'bg-red-500'
                  : item.platform === 'LinkedIn'
                  ? 'bg-blue-600'
                  : 'bg-gray-300'
              }`}
            >
              {/* Platform Name */}
              <span className="text-sm font-medium">{item.platform}</span>
  
              {/* Link (icon or arrow for link indication) */}
              <a href={item.link} className="text-sm font-bold">
                →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default LeftSideContainer;