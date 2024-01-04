

const Navbar = () => {
  return (
    <nav className=" z-10 fixed top-0 left-0 right-0 p-3 bg-gray-900 text-white border-b border-white">
      <div className="container mx-auto flex justify-around">
        <ul className="space-x-6 flex">
          <li className="py-3"><a href="">Home</a></li>
          <li className="py-3"><a href="">About</a></li>
          <li className="py-3"><a href="">Services</a></li>
          <li className="py-3"><a href="">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;