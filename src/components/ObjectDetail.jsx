import { useParams } from 'react-router-dom';
import songsList from '../data/songs-list';
import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';

export default function ObjectDetail() {
  const { id } = useParams();  // Retrieve the id from the URL
  const lyricsContainerRef = useRef(null); // Create a ref for the lyrics container
  const [isScrolling, setIsScrolling] = useState(false); // State to track scrolling status
  const scrollIntervalRef = useRef(null); // Ref to store the scroll interval

  // Find the song that matches the id from the URL
  const song = songsList.find(song => song.id === parseInt(id));

  if (!song) {
    return <p>Song not found</p>;
  }

  const scrollToBottom = (timedelay = 30, minScrollHeight = 1) => {
    const container = lyricsContainerRef.current; // Get the container ref
    if (!container) return; // Return if ref is not available

    // Toggle the scrolling state
    setIsScrolling(prev => !prev);

    if (!isScrolling) { // If not currently scrolling, start scrolling
      const totalHeight = container.scrollHeight; // Total scrollable height
      let currentHeight = container.scrollTop; // Current scroll position

      scrollIntervalRef.current = setInterval(() => {
        // Scroll if we haven't reached the bottom
        if (currentHeight + minScrollHeight < totalHeight) {
          container.scrollBy(0, minScrollHeight); // Scroll down
          currentHeight += minScrollHeight; // Update the current height
        } else {
          clearInterval(scrollIntervalRef.current); // Clear the interval when reaching the bottom
          setIsScrolling(false); // Reset scrolling status
        }
      }, timedelay);
    } else {
      // If already scrolling, stop it
      clearInterval(scrollIntervalRef.current);
      setIsScrolling(false);
    }
  };

  return (
    <div className="p-6 h-screen">
      <h2 className="text-2xl font-bold">{song.name}</h2>
      <p className="text-lg">Artist: {song.artist}</p>
      <p className="text-lg">Rhythm: {song.rhythm}</p>

      <div 
        ref={lyricsContainerRef} // Set the ref for the lyrics container
        className="my-6 overflow-auto h-4/6 bg-gray-100 p-4 rounded shadow-md"
      >
        <pre className="whitespace-pre-wrap">
          {song.lyrics}
        </pre>
      </div>

      <div className='flex gap-x-2'>
        {/* Button to scroll to the bottom of the lyrics */}
        <button 
          onClick={() => scrollToBottom(100, 1)} // Adjust the delay and scroll height if needed
          className="mt-4 p-2 bg-dark-gray text-white rounded hover:bg-[#4d4d4d] transition">
          {isScrolling ? 'Stop Scrolling' : 'Scroll to Bottom'}
        </button>

        <button 
          className="mt-4 p-2 bg-dark-gray text-white rounded hover:bg-[#4d4d4d] transition">
          +speed
        </button>

        <button className="mt-4 p-2 bg-[#e57373] text-white rounded hover:bg-[#d06464] transition">
          <Link to="/">Homepage</Link>
        </button>
      </div>
    </div>
  );
}





