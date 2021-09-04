import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image layout="fill" objectFit="cover"  src="https://links.papareact.com/0fm"/>
            <div className="absolute top-1/2 w-full text-center ">
            <h3 className="text-sm lg:text-lg">Not sure where to go? Perfect</h3>
            <button className="border-2 bg-white rounded-full mt-3  px-10 py-4 cursor-pointer outline-none border-none text-purple-500 shadow-md font-bold active:scale-90 hover:shadow-xl transition duration-150">I,m Flexible</button>
            </div>
        </div>
    )
}

export default Banner
