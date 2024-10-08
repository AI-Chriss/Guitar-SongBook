import { Link } from 'react-router-dom';
import songsList from '../data/songs-list';

const arrayDataItems = songsList.map(song => 
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
    <div className='flex items-center flex-col'>
      <h2 className='self-start'>Songs:</h2>
      <ul className='overflow-scroll max-h-72 px-4 my-4'>
        {arrayDataItems}
      </ul>
    </div>
  );
}
