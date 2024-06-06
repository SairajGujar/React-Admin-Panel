import React, { useState } from 'react';
import axios from 'axios';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleUpload = async () => {
    setLoading(true);
    const uploadedImageUrls = [];
    for (const image of images) {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Replace with your upload preset
      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`, // Replace with your Cloudinary cloud name
          data
        );
        uploadedImageUrls.push(res.data.secure_url);
      } catch (err) {
        console.error(err);
      }
    }
    setImageUrls(uploadedImageUrls);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">What does your place look like?</h1>
      <p className="mb-4">Upload at least 5 photos of your property. The more you upload, the more likely you are to get bookings. You can add more later.</p>
      <div className="border-2 border-dashed border-gray-300 p-6 text-center">
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="hidden"
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          className="cursor-pointer flex flex-col items-center justify-center space-y-2"
        >
          <div className="text-5xl text-gray-400">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Upload photos
          </button>
          <p className="text-gray-600">jpg/jpeg or png, maximum 47MB each</p>
        </label>
        {images.length > 0 && (
          <button
            onClick={handleUpload}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Upload {images.length} Image{images.length > 1 ? 's' : ''}
          </button>
        )}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      <div className="mt-4">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt="Uploaded" className="w-32 h-32 object-cover inline-block mr-2 mb-2" />
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-semibold mb-2">What if I don't have professional photos?</h2>
        <p>No problem! You can use a smartphone or a digital camera. Here are some tips for taking great photos of your property:</p>
        <a href="#" className="text-blue-500 underline mt-2 block">Here are some tips for taking great photos of your property</a>
        <p className="mt-2">If you don’t know who took a photo, it's best not to use it. Only use photos others have taken if you have permission.</p>
      </div>
    </div>
  );
};

export default Photos;
