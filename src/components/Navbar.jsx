import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (

    <nav className="flex justify-between items-center px-4 md:px-12 lg:px-24 py-8 border-b sticky top-0 bg-white">
      <div className="space-x-6">
        <Link to="/" className="text-xl font-bold text-primary font-semibold">YESpace</Link>
        <Link to="/" className="text-base hover:underline text-defaultTex hover:text-primary">About</Link>
        <Link to="/" className="text-base hover:underline text-defaultText hover:text-primary">Contact</Link>
      </div>
      <div className="space-x-3">
          <Link to="/signin" className="hover:underline bg-backgroundGray text-defaultText px-4 py-2 rounded-xl border-border border">Sign In</Link>
          <Link to="/signup" className="hover:underline bg-defaultText text-whiteText px-4 py-2 rounded-xl">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;