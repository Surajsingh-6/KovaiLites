"use client"
// app/upload/page.js or pages/upload.js
import { useState } from 'react';

export default function UploadPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
      setMessage('Image details saved successfully!');
    } else {
      setMessage(`Failed to save: ${data.message}`);
    }
  };

  return (
    <div>
      <h1>Upload Image Details</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Keywords (comma separated)"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
