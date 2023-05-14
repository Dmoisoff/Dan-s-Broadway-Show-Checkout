import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SelectDropdown } from "~/components/selectdropdown";
import { mockShows } from "~/utils/mockdata";
import { useState } from "react";
import { number } from "zod";


const Home: NextPage = () => {
  const [selectedShowId, setSelectedShowId] = useState<number>(0)


  const dropDownOptions = Object.values(mockShows).map(show => ({value: show.id, label: `${show.name} - $${show.price}`}));

  const handleSelectedShow = (id: string) => {
    setSelectedShowId(Number(id));
  }
  console.log(mockShows)
  // container flex flex-col items-center justify-center gap-12 px-4 py-16 

  return (
    <>
      <Head>
        <title>Mock Checkout Page</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem] gap-12 px-4 py-16">
            Mock <span className="text-[hsl(280,100%,70%)]">Checkout</span> Page
          </h1>
        </div>

          <div className="h-screen w-9/12 bg-gray-400">
            <div className="h-5/6 grid grid-cols-5 grid-rows-5 gap-4">
              <div className="max-w-l col-span-3 row-span-2 bg-red-500 rounded-md bg-gray p-4 text-black border-gray-300" >1</div>
              <div className="col-span-3 row-span-3 col-start-1 row-start-3 bg-green-500 rounded-md bg-gray p-4 text-black border-gray-300">2</div>
              <div className="col-span-2 row-span-5 col-start-4 row-start-1 bg-blue-500 rounded-md bg-gray p-4 text-black border-gray-300" >3</div>
            </div>
          </div>
          
    



        

      
        
      </main>
    </>
  );
};

export default Home;

