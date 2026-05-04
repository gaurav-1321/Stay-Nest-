import { useState } from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Middle from './Middle';
const Home = () => {
  const [query,setquery]= useState("");
  return (
    <>
     <div className="relative w-full h-[350px] bg-gray-800 flex items-center justify-center ">
      <Header/>
      {/* CONTENT */}
      <div className="text-center text-white w-full px-4">
        <h1 className="text-4xl font-bold mb-2">StayNest</h1>
        <p className="mb-6 text-lg">
          Find your Dream Stay With Us.
        </p>
      <Searchbar setquery={setquery}/>
      </div>
    </div>
     <Middle query={query}/>
    
    </>
  )
}

export default Home
