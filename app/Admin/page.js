"use client";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const word="tryagain";
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Check username and password
    if (username === word && password === word) {
      setIsLoggedIn(true);
      setMessage('Login successful!');
    } else {
      setMessage('try again');
    }
  };

  const handleImageDetailsSubmit = async (e) => {
    e.preventDefault();

    // Simulate saving image details (replace with actual API call if needed)
    const res = await fetch('/api/save-image-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl,
        title,
        keywords,
        category,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert('Image details saved successfully!');
      setImageUrl('');
      setTitle('');
      setKeywords('');
      setCategory('');
    } else {
      alert(`Failed to save: ${data.message}`);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-8">
      {!isLoggedIn ? (
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Login
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
          {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </div>
      ) : (
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
          <h1 className="text-xl font-bold mb-4">Upload Image Details</h1>
          <form onSubmit={handleImageDetailsSubmit}>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Keywords (comma separated)"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Save
            </button>
          </form>
          {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Login;
