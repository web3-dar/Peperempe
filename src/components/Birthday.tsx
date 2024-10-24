import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import vid from '../images/WhatsApp Video 2024-10-24 at 00.26.33_fb802ad9.mp4';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import music from '../music/Shoday_-_Queen_More_feat_Batife__Vistanaij.com.ng.mp3'; // Importing your music file

const WelcomePage: React.FC = () => {
  // Handle background music on page load
  useEffect(() => {
    const audio = new Audio(music); // Correctly initializing with the imported music file
    audio.loop = true; // Loop the music

    audio.play().catch((error) => {
      console.log('Error playing audio:', error); // Audio won't autoplay without user interaction
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // Get window size for confetti animation
  const { width, height } = useWindowSize();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline // Added playsInline attribute
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-center animate-bounce text-yellow-200">
          Happy Birthday Peperempe!{' '}
        </h1>
        <span className="text-red-300 text-4xl animate-bounce font-semibold">
          <FontAwesomeIcon icon={faHeart} /> <FontAwesomeIcon icon={faHeart} />{' '}
          <FontAwesomeIcon icon={faHeart} />
        </span>

        <div className="animate-bounce mt-6 text-center">
          <p className="text-xl md:text-2xl">Let's celebrate your special day!</p>
        </div>

        {/* Link to Wishes Page */}
        <Link to="/wishes">
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition">
            <FontAwesomeIcon icon={faHeart} /> Click here <FontAwesomeIcon icon={faHeart} />
          </button>
        </Link>
      </div>

      {/* Confetti Animation */}
      <Confetti
        className="z-20"
        width={width}
        height={height}
        numberOfPieces={200} // Control how much confetti is displayed
        gravity={0.05} // Adjust the speed of falling confetti
      />
    </div>
  );
};

export default WelcomePage;
