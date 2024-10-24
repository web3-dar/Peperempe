import React, { useEffect, useState } from 'react';
import videoFile from '../images/WhatsApp Video 2024-10-24 at 00.26.33_fb802ad9.mp4'; // Replace with your video path
import musicFile from '../music/hbd.mp3'; // Import your background music file
import { Link } from 'react-router-dom';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/WhatsApp Image 2024-10-24 at 00.27.29_4f135a32.jpg';

const images = [
  { src: img1, text: "Peperempe" },
  { src: img2, text: "Stay Wicked Queen" },
  { src: img3, text: "Kerosene" },
  { src: img4, text: "You deserve all the love!" },
  { src: img5, text: "Have a fantastic year ahead!" },
  { src: img6, text: "Cheers to you!" },
];

const VideoInputComponent: React.FC = () => {
  const [inputVisible, setInputVisible] = useState(true);
  const [bigTextVisible, setBigTextVisible] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const placeholderText = "Bukola Peperempe"; // Your birthday wish here

  // Automatically change image every second
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showImages) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1500); // Change image every 1.5 seconds
    }
    return () => clearInterval(interval);
  }, [showImages]);

  // Handle the input placeholder animation and text display
  const handleInputFocus = () => {
    setInputVisible(false);
    setBigTextVisible(true);
    setShowImages(true);
  };

  // Hide big text after 2 seconds
  useEffect(() => {
    if (bigTextVisible) {
      const timer = setTimeout(() => {
        setBigTextVisible(false);
      }, 2000); // Big text display duration
      return () => clearTimeout(timer);
    }
  }, [bigTextVisible]);

  // Handle background music on component mount
  useEffect(() => {
    const audio = new Audio(musicFile);
    audio.loop = true; // Loop the music
    audio.play().catch((error) => {
      console.log('Error playing audio:', error); // Audio won't autoplay without user interaction
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline // Added for better mobile compatibility
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        {inputVisible && (
          <div className="relative mb-4">
            <div className="animated-placeholder text-semibold text-red-200">
              {Array.from(placeholderText).map((char, index) => (
                <span
                  key={index}
                  style={{
                    opacity: index < 2 ? 1 : 0,
                    animation: `showChar 0.5s forwards ${index * 0.5}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
            <input
              type="text"
              value={"CEO LUXEBYBUKOLA"}
              readOnly
              className="p-4 w-64 bg-transparent border-b-2 border-white text-white placeholder-opacity-50 focus:outline-none focus:border-yellow-500 transition-all duration-300 text-center text-yellow-200 transition"
              onFocus={handleInputFocus}
            />
          </div>
        )}

        {bigTextVisible && (
          <h1 className="text-4xl font-semibold transition-opacity duration-500 text-yellow-200">
            Enjoy Your Day!
          </h1>
        )}

        {showImages && (
          <div className="mt-10 w-full max-w-lg">
            <h2 className="text-xl text-white mb-4 p-6 text-center text-yellow-200">
              Celebrate yourself today; you deserve all the happiness in the world!
            </h2>

            {/* Image Card with Text Overlay */}
            <div className="relative flex justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-80 w-4/5">
                <img
                  src={images[currentIndex].src}
                  alt="Birthday Wish"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                  {images[currentIndex].text}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Button to start the input field and image/text animation */}
        <button
          onClick={handleInputFocus}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
          I go stress you!
        </button>
        <Link to="/" className="mt-8 px-4 py-2 bg-yellow-200 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition">
          Start Again
        </Link>
      </div>
    </div>
  );
};

export default VideoInputComponent;
