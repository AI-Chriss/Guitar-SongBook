import Header from './Header'
import SongsList from './SongsList'

export default function Home() {
  
  return (
    <main 
      className='w-screen overflow-hidden flex flex-col h-full items-center justify-center @container'
    >
        <Header />
        <SongsList />
    </main>
  )
} 