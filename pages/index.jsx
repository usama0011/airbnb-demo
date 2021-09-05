import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import JsonData from "../components/DomasticCard.json";
import BigCard from "../components/BigCard.json";
import MediumCard from "../components/MediumCard";
import Image from "next/image";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import HeaderBottom from "../components/HeaderBottom";
import { PaperClipIcon } from "@heroicons/react/outline";
export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Client-Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeaderBottom/>
      <main className="bg-[#f7f7f7] ">
        <div className="max-w-6xl w-full flex-grow mt-4 shadow-2xl mx-auto border px-8 sm:px-16 bg-white">

        
        <section className=" pt-14">
          <h2 className="font-bold pb-5 pt-6 text-4xl">What Service are You looking For</h2>
          <div className="bg-white px-7 py-5 shadow-md">
          <h1 className="text-gray-900">
              Describe the service you are looking to purchase <br />please be as
              detailed as possible:
            </h1>
            <textarea
              className=" outline-none px-2 py-3 mt-3 flex-grow w-full  border text-gray-500 mb-2 "
              name="text"
              id="text"
              placeholder="I'm looking for..."
              cols="50"
              rows="7"
            ></textarea>
            <button className="flex shadow-md  items-center bg-gray-200   to-gray-700 px-2 py-2">
              <PaperClipIcon className="h-6 mr-3" />
              Attach Files
            </button>
          </div>
        </section>
        <section className=" shadow-xl p-2">
          <h2 className="font-bold pb-5 p-2 text-4xl">
           Choose Category 
          </h2>
          <div className=" flex-grow w-full">
        <div className=" pb-5 max-w-3xl">
            <form className=" w-full flex-grow" action="">
              <select className=" w-full  flex-grow border-2 p-2 rounded-lg outline-none" id="dropdown">
                <option className="font-bold">Select....</option>
                <option className="p-5  bg-gray-100" value="1">Graphic Desing</option>
                <option className="p-5  bg-gray-100" value="2">Digital Marketing</option>
                <option className="p-5  bg-gray-100" value="3">Writing & Translation</option>
                <option className="p-5  bg-gray-100" value="4">Vedio & Animation</option>
                <option className="p-5  bg-gray-100" value="5">Music & Vedio</option>
                <option className="p-5  bg-gray-100" value="6">Programming & Tech</option>
                <option className="p-5  bg-gray-100" value="7">Lifesyle</option>
                <option className="p-5  bg-gray-100" value="8">Data</option>
                <option className="p-5  bg-gray-100" value="9">Advaced</option>
               
              </select>
            </form>
          </div>
        </div>
        </section>
         <section className="shadow-md bg-white mx-auto px-8 border-t pb-14 border-b mb-2">
         <h1 className="text-lg font-bold pt-5 mb-3 text-gray-700">Once You place you order,when woruld you like your service dellvered?</h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="px-3 py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        24 Hours
              </div>
              <div className="px-3 py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform  shadow-md transition .5s ease-out">
                       3 Day
              </div>
              <div className="px-3 py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        7 Days
              </div>
              <div className="px-3 py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform transition shadow-md .5s ease-out">
                       Others
              </div>
              
          </div>
          <div className="px-2 absolute right-50 top-50 justify-self-end py-2 w-[200px] rounded-xl text-center bg-green-400 mt-2 text-white font-bold shadow-md cursor-pointer ">
              Submit Request
          </div>
         </section>
         </div>
      </main>
      <Footer/>
    </div>
  );
}

export async function getstaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (result) => result.json()
  );
  const cardData = await fetch("https://links.papareact.com/zp1").then(
    (resutl) => resutl.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
