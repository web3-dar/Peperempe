import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import vid from '../images/video2.mp4';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import music from '../music/hbd.mp3'; // Importing your music 

const WishesPage: React.FC = () => {
  const fullText = [
    "Happy Birthday Bukola!",
    "Wishing you a day filled...",
    "..with joy and..",
    '..unforgettable moments',
    "May all your dreams..",
    '..come true!',
    "Here's to another year.",
    "Stay wicked.",
    "More Calendar to destroy ",
    "Lmfaoooooo",
    "Happy Cake Day!",
    "Happy womb escape",
    "Happy +1",
    "You are amazing! ngl",
    "You are awesome",
    "Thanks for always..",
    "Listening to my rants",
    "Love you.",
    "....",
    "....",
    "....",
    '- Damilola'
  ]; // Your long text as an array of lines
  const displayDuration = 1500; // Duration to display each full text in milliseconds
  const [displayedText, setDisplayedText] = useState(fullText[0]); // Initialize with the first text

  // Handle background music on page load
  useEffect(() => {
    const audio = new Audio(music); // Correctly initializing with the imported music file
    audio.loop = true; // Loop the music

    audio.play().catch((error) => {
      console.log('Error playing audio:', error); // Audio won't autoplay without user interaction
    });

    const displayInterval = setInterval(() => {
      setDisplayedText((prevText) => {
        const currentIndex = fullText.indexOf(prevText); // Get the current index from the displayed text
        const nextIndex = (currentIndex + 1) % fullText.length; // Move to the next text
        return fullText[nextIndex]; // Return the next text to display
      });
    }, displayDuration); // Change text every few seconds

    return () => {
      clearInterval(displayInterval); // Clean up the interval
      audio.pause();
      audio.currentTime = 0;
    };
  }, [fullText, displayDuration]);

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
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-40">
        {/* Birthday Text Display */}
        <h1 className="text-3xl font-semibold whitespace-nowrap p-4">
          {displayedText} {/* Display the current text */}
        </h1>

        {/* Link to Wishes Page */}
        <Link to="/cake">
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition">
            Click here
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

export default WishesPage;
