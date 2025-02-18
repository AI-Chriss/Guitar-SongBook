import { useEffect } from 'react';
import axios from 'axios';

const SongComponent = () => {
  useEffect(() => {
    const addSongsToDatabase = async () => {
      try {
        const songsList = [
          {
            name: 'Flowers In The Water',
            artist: 'Nathan Evans',
            lyrics: '...lyrics...',
            rhythm: '↓↓ ↑↑ ↓↑',
            img: '/assets/all-of-me.jpg'
          },
          {
            name: 'Zawsze z tobą chciałbym być',
            artist: 'Ich Troje',
            lyrics: '...lyrics...',
            rhythm: '↓↓ ↑↑ ↓↑',
            img: '/assets/all-of-me.jpg'
          }
        ];

        console.log("Starting to add songs...");  // Dodajemy logowanie na początku
        for (const song of songsList) {
          const response = await axios.post('https://df237977-88c6-4e93-a535-3501dc238b0e-00-2gl8w6uj8b54i.worf.replit.dev:5000', {
            name: song.name,
            artist: song.artist,
            lyrics: song.lyrics,
            rhythm: song.rhythm
          });
          console.log('Added song:', response.data);
        }
      } catch (error) {
        console.error('Error adding song:', error.response ? error.response.data : error.message);
      }
    };
    console.log("Starting to add songs...");
    addSongsToDatabase();  // Wywołanie funkcji w useEffect
  }, []);

  return (
    <div>
      <h1>Song List</h1>
    </div>
  );
};

export default SongComponent;