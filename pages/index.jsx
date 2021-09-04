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
export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-9xl mx-auto px-8 sm:px-16">
        <section className=" pt-5">
          <h2 className="font-bold pb-5 text-4xl">Explore Nearby</h2>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {JsonData.map((item, index) => (
              <SmallCard
                key={index}
                img={item.Image}
                location={item.City}
                distance={item.Location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-bold pb-5 text-4xl">
            Live anywhere
          </h2>
          <div className="flex space-x-7 overflow-scroll scrollbar-hide p-3 ml-3 mx-auto items-center">
           {BigCard.map((item,index)=>(
             <MediumCard
             
             img={item.Image}
             title={item.Title}
             
             
             />
           ))}
          </div>
        </section>
         <section className="">
                <LargeCard
                img="https://links.papareact.com/4cj"
                 title="The Greatest Outdoors"
                 description="Wishlists curated by Airbub."
                 buttonText="Get Inspired"
                
                
                />
         </section>
         
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
