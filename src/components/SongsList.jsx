import { Link } from 'react-router-dom';
import songsData from '../data/songs-data.js';

// define a function to render the list of songs from songsData
const songs = songsData.map(song => 
  <li key={song.id} className='my-4'>
    <Link to={`/songs/${song.id}`} className='flex gap-x-4'>
      <img src={song.img} alt='' className='w-12 h-12 rounded-full' />
      <div>
        <p className='text-lg font-semibold'>{song.name}</p>
        <p>{song.artist}</p>
      </div>
    </Link>
  </li>
);



export default function ObjectList() {
  return (
    <>
      <p className='mb-2'>Songs:</p>
      <div className='flex items-center flex-col'>
        <ul className='overflow-scroll scrollbar-hide h-3/5 px-4 absolute'>
          {songs}
        </ul>
      </div>
    </>
  );
}
