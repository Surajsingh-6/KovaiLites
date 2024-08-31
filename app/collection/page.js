// app/page.js or pages/index.js
"use client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/get-images');
      const data = await res.json();
      if (data.success) {
        setImages(data.images);
      }
    };
    fetchImages();
  }, []);

  return (<div>
      <h1 >Our Collections</h1>
    <div className='flex w-full min-h-screen'>
      <div className='flex flex-wrap mt-5'>
        {images.length === 0 ? (
          <p>LOADING...</p>
        ) : (
          images.map((image) => (
            <div key={image._id} className='lg:mx-auto'>
              <h2 className='w-full text-center'>{image.title.toUpperCase()}</h2>
              <img src={image.imageUrl} alt={image.title} className='mx-auto w-96 h-[30rem] object-contain  bg-[var(--bga)] p-10  mb-10' />
              
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
