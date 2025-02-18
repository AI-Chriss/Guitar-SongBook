import Header from './Header'
import ObjectList from './ObjectList'
import SongComponent from '../data/post'

export default function Home() {
  return (
    <main className='flex flex-col content-center items-center h-screen relative'>
      <Header />
      <ObjectList />
      <SongComponent />
    </main>
  )
} 