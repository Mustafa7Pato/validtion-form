import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm bg-cyan-500 shadow-md rounded-md p-4">
        <img
          className="w-full h-32 object-cover rounded-t-md"
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Sweet Card</h2>
          <p className="text-gray-700">Some description about the card.</p>
          <Link to="/login">
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
              login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
