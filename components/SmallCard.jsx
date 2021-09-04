import Image from "next/image"


function SmallCard({img,location,distance}) {
    return (
        <div className="flex items-center m-2  space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200  rounded-xl  ease-out">
            <div className="relative h-16 w-16 ">
                <Image layout="fill"  className="rounded-lg" src={img}/>
            </div>
            <div className="">
                <h2 className="font-bold">{location}</h2>
                <h3 className="to-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
