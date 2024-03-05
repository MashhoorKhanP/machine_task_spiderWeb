
const Navbar = () => {
  return (
    <div className="navbar bg-transparent h-16 flex justify-around items-center px-4 pt-6">
      <div className="navbar-content flex items-center space-x-4">
        <div className="info-icon text-2xl pr-3 text-white"><i className="bi bi-info-square"></i></div>
        <div className="notification-icon relative text-2xl ">
        <i className="bi bi-bell text-white"></i>
          <span className="badge-dot absolute top-0 right-0 bg-custom-500 rounded-full w-2 h-2"></span>
        </div>
        <div className="user-info pl-3 ">
          <h2 className="text-lg font-semibold text-white">Hi, <span className="text-teal-300">Muhammed Asad</span></h2>
          <p className="text-sm text-white">Welcome back!</p>
        </div>
        <div className="avatar w-12 h-12 bg-gray-300 rounded-full border-2 border-custom-500 flex justify-center items-center">
          <img
            src="https://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
            className="object-cover w-full h-full rounded-full"
            alt="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
