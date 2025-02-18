import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import songsList from '../data/songs-list';

export default function ObjectDetail() {
  const { id } = useParams();
  const song = songsList.find(song => song.id === parseInt(id));
  const lyricsRef = useRef(null);

  const smoothScrollToBottom = () => {
    const container = lyricsRef.current;
    if (!container) return;

    // Ustawiamy interwał, który co 20ms zwiększa scrollTop o 5 pikseli
    let intervalId = setInterval(() => {
      // Jeśli osiągnięto dół, zatrzymaj interwał
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        clearInterval(intervalId);
        return;
      }
      container.scrollTop += 2; // Możesz zmienić wartość, aby dostosować prędkość
    }, 200);

    // Funkcja przerywająca scrollowanie przy manualnym przewijaniu
    const stopScrolling = () => {
      clearInterval(intervalId);
      container.removeEventListener('wheel', stopScrolling);
      container.removeEventListener('touchstart', stopScrolling);
    };

    // Jeśli użytkownik zacznie przewijać (myszką lub dotykiem), zatrzymaj automatyczne scrollowanie
    container.addEventListener('wheel', stopScrolling);
    container.addEventListener('touchstart', stopScrolling);
  };

  return (
    <div className="p-6 h-screen">
      <h2 className="text-2xl font-bold">{song.name}</h2>
      <p className="text-lg">Artist: {song.artist}</p>
      <p className="text-lg">Rhythm: {song.rhythm}</p>

      <div 
        className="my-6 overflow-auto h-4/6 bg-gray-100 p-4 rounded shadow-md"
        ref={lyricsRef}
      >
        <ReactMarkdown className="whitespace-pre-wrap">
          {song.lyrics}
        </ReactMarkdown>
      </div>

      <div className="flex gap-x-2">
        <button
          className="mt-4 p-2 bg-[#e57373] text-white rounded hover:bg-[#d06464] transition"
          onClick={smoothScrollToBottom}
        >
         + Scroll
        </button>
        <button className="mt-4 p-2 bg-[#e57373] text-white rounded hover:bg-[#d06464] transition">
          <Link to="/">Homepage</Link>
        </button>
      </div>
    </div>
  );
}






